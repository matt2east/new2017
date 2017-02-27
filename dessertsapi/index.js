// Requirements 
var express = require('express');
var methodOverride = require('method-override');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var User = require('./models/user');
var Dessert = require('./models/dessert'); 
var Comment = require('./models/comment');
var seedDB = require('./seeds.js');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var db = mongoose.connection;

app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost/project'); //set up DB
app.set('view engine', 'ejs');

// Reads post request body:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));
// connects css folder
app.use(require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

// create strategy
passport.use(new LocalStrategy(User.authenticate()));
 //pulls user data into current user

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
  next();
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated())
    {return next();
     console.log(req.user);
    } else {
        redirect: res.redirect('/login');
    }
}
function isCreator(req, res, next){
//    console.log(req.user);
//    console.log("id is " + req.user.id);
//    console.log("username is " + req.user.username)
    var urlid = req.params.id;
    Dessert.findById(urlid, function(err, dessert){
//        console.log("dessert is " + dessert);
//        console.log("creator username is "+ dessert.creator.username); 
//        console.log("creator username is "+ dessert.creator.id);
        var commenter = req.user.id;
        var creator = dessert.creator.id;
//        console.log(commenter);
//        console.log(creator);
        if (commenter == creator){
//            console.log ("legit")
             next();
        } else {
//             res.send("nope")
             res.redirect('/desserts');
        }
    })
   
}

function commentCreator(req, res, next){
    console.log("commentCreator");
    var commentid = req.params.commentid;
    Comment.findById(commentid, function(err, comment){
        console.log("comment is" + comment);
    })
}

var commentRoutes = require('./routes/comments');
app.use('/desserts/:id/comments', commentRoutes);
var dessertRoutes = require('./routes/desserts');
app.use('/desserts', dessertRoutes);
var indexRoutes = require('./routes/index');
app.use(indexRoutes);

//seedDB();
//no longer contains comment associated with user

// Express port
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port 3000!');
});

module.exports = 'app.js';








