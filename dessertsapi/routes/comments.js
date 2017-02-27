//comments routes
var express = require('express');
var router = express.Router({mergeParams: true});
var Dessert = require('../models/dessert'); 
var Comment = require('../models/comment'); 
var User = require('../models/user'); 

function isLoggedIn(req, res, next){
    if (req.isAuthenticated())
    {return next();
     console.log(req.user);
    } else {
        redirect: res.redirect('/login');
    }
}

function commentCreator(req, res, next){
    console.log("commentCreator");
    var commentid = req.params.commentid;
    Comment.findById(commentid, function(err, comment){
//        console.log("comment is " + comment);
        var commentUser = req.user.id;
        var commentOriginal = comment.author.id;
        console.log(commentUser);
        console.log(commentOriginal);
        if (commentUser == commentOriginal){
            next();
        } else {
            res.redirect('/desserts')
        }
    })
}

// Form to create a new comment
router.get('/new', isLoggedIn, function(req, res){
    var urlid = req.params.id;
    Dessert.findById(urlid, function(err, dessertX){
        //render needs to be within the function or data is not available
        res.render('comments/new',{dessert: dessertX});
    })
})
//shows me the "logged out" partials if I add currentuser: req.user

router.post('/', function (req, res){
    var urlid = req.params.id;
    console.log(req.user.id);
    Dessert.findById(urlid, function(err, dessertInput){
        var commentNew = {
            text: req.body.newCommentText,
            author: {
                username: req.user.username,
                id: req.user.id
            }
        }
        Comment.create(commentNew, function(error, commentInput)
                       {
                if(err){
                    console.log(err);
                } else {
                    dessertInput.comments.push(commentInput);
                    dessertInput.save();
//                    console.log(commentInput.author)
                    console.log("comment input is " + commentInput);
                    res.redirect('/desserts/' + urlid);
                }
            })
    })
})
router.get('/:commentid/edit', function (req, res){
        var commentid = req.params.commentid;
        var dessertid = req.params.id;
    console.log(req.params.commentid)
        Comment.findById(commentid, function(err, comment){
            res.render('comments/edit', {comment: commentid, dessert: dessertid}) 
            //comment and dessert passing in just id numbers, not the object
        })             
})

 router.delete('/:commentid/', commentCreator, function(req, res) {
     var dessertid = req.params.id;
        Comment.remove({
            _id: req.params.commentid
        }, function(err, dessert) {
            if (err)
                res.send(err);
            console.log("deleted comment")
            res.redirect('/desserts/'+dessertid)
        });
    });

router.put('/:commentid/', commentCreator, function(req, res){
    var dessertid = req.params.id;
    console.log("testing " + req.params.commentid)
Comment.findByIdAndUpdate(req.params.commentid, {text: req.body.editCommentText},
                         function( err, comment){
    if (err) {res.send(err)
             }else{
    res.redirect('/desserts/'+dessertid)}
}
                         )
})


//router.put('/:commentid/', function(req, res){
//    console.log("id is " + req.params.commentid)
//    var commentid = req.params.commentid;
//    console.log("id is " + commentid);
//    //returns "comments"
//Comment.findById(commentid, function (err, comment) {
//  if (err) return handleError(err);
////comment.author = req.params.author;
////    comment.username=req.body.username;
//  comment.text = req.body.editCommentText;
//  comment.save(function (err, updatedComment) {
//    if (err) return handleError(err);
//    res.send(updatedComment);
//  });
//});
//})
//app.use('/desserts/:id/comments', commentRoutes);



module.exports = router;