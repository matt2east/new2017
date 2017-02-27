//index routes

var express = require('express');
var router = express.Router({mergeParams: true});
var Dessert = require('../models/dessert'); 
var Comment = require('../models/comment'); 
var User = require('../models/user'); 
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;


router.get('/', function(req, res){
  res.render('landing');
});

router.get('/register', function(req, res){
    console.log("access registration page");
  res.render('register', {});
});

router.post('/register', function(req, res, next) {
    //email validation logic
  console.log('registering user');
 User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log('error while user register!', err);
        res.redirect('register');
          return next(err);
    }
     passport.authenticate('local')
     (req, res, function (){
         console.log('user registered!');
         res.redirect('/desserts');
    });
  });
});

router.get('/login', function(req, res){
console.log("accessing login page");    
  res.render('login');
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/desserts'
    , failureRedirect: '/login'
}),
         function(req, res){
    console.log("body is" + req.body.user);
      console.log("params is" + req.params.user);
}
        );
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/desserts');
});

module.exports = router;