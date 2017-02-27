//desserts routes
var express = require('express');
var methodOverride = require('method-override');
var router = express.Router({mergeParams: true});
var Dessert = require('../models/dessert'); 
var Comment = require('../models/comment'); 
var User = require('../models/user');
router.use(methodOverride('_method'));

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

// Display all desserts
router.get('/', function(req, res){
    //shows up in url bar
	Dessert.find(function(err, dessertsX){ //like 'db.desserts.find()' in Mongo
		res.render('desserts/index', {desserts: dessertsX, currentUser: req.user}); //first "desserts" matches <% desserts.forEach %> in index.ejs
        //location of file in folder structure
	})
});// the argument is representing "all the data returned from mongo", so the index page receives the data in the form shown in the render statement.

// Form to create new dessert
router.get('/new', isLoggedIn, function(req, res){
	res.render('desserts/new');
});

// Display SINGLE DESSERT- refer to: https://www.mongodb.com/blog/post/the-mean-stack-mistakes-youre-probably-making
router.get('/:id', function(req, res){
	Dessert.findById(req.params.id).populate('comments').exec(function(err, dessertX){
        if(err){
			console.log(err);
		} else {
            res.render('desserts/show',{dessert: dessertX});
		} 
    })	
});

// Post created-dessert to display-all-desserts page
router.post('/', function(req, res){
//    console.log("posting new dessert")
	Dessert.create( //.create = .new and .save
	{ name: req.body.newDessertName, image: req.body.newDessertImage, description: 
     req.body.newDessertDescription, id: req.body._id,
     creator: {
                username: req.user.username,
                id: req.user.id
            }
    }, 
        //data that's saving in DB
	function(err, dessert){
		if(err){
			console.log(err);
		} else {
//			 console.log("dessert creator is " + req.user.username);
			res.redirect('/desserts'); //redirect is also a GET request!
		}
	})
})

router.get('/:id/edit', isLoggedIn, function (req, res){
//    console.log("loggedin id is " + req.user._id);
    var urlid = req.params.id;
    Dessert.findById(urlid, function(err, dessert){
        console.log("dessert is " + dessert);
        res.render('desserts/edit', {dessert: dessert});          
    })
})

router.put('/:id', function(req,res){
    console.log(req.params.id);
    Dessert.findById(req.params.id, function(err,thisDessert){
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(thisDessert.name);
                thisDessert.name=req.body.editDessertName;
                thisDessert.image=req.body.editDessertImage;
                thisDessert.description=req.body.editDessertDescription;
                thisDessert.save(function(err){
                    if(err){
                             console.log(err);
                        }else{
                            console.log("found is " + thisDessert);
                            res.redirect('/desserts/'+req.params.id);
                }
            });                            
        }
    })
})

 router.delete('/:id', isCreator, function(req, res) {
        Dessert.remove({
            _id: req.params.id
        }, function(err, dessert) {
            if (err)
                res.send(err);
            console.log("deleted dessert")
            res.redirect('/desserts')
        });
    });



//res.send(req.params)
module.exports = router;
//div, p all div and all p
//div p all p inside div
//div + p all p placed immediately after div
//div * p contains ??
//descendents vs children children are immediate, descendents are children of childen
//responsive length em
//css ^ begins with $ ends with regex
//css closer to element higher priority, inline to element higher than internal style, higher than external style
//css % specified of width or height ??
//css float management ??
//css  background attach
//xs is the default bootstrap
//position fixed vs position absolute difference
//box model border, padding, height, width, content
//display and position
//what does x really do?
//how does z-index work?
//node version manager nvm
//wes bos
//use devtools video again



