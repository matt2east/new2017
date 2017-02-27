var mongoose = require('mongoose'); 
var Dessert = require('./models/dessert'); //also line 19 in app.js
var Comment = require('./models/comment'); 

// dessert data
var dessertArray = [
	{
		name 		: "Cream Cake",
		image 		: "http://i.imgtc.com/E95yksb.jpg",
		description : "Delicate and delicious!",
	},
	{
		name 		: "Red Velvet Cake",
		image		: "http://i.imgtc.com/neag6Q4.jpg",
		description : "Classic, heart-warming."
	},
	{
		name 		: "White Chocolate",
		image 		: "http://i.imgtc.com/D9CY418.jpg",
		description : "Blah."
	}
];



function seedDB() {
    // clear all desserts from database
    Dessert.remove({}, function (err) {
        if (err) return handleError(err);
    });
        // insert dummy data (array) into database
//    Dessert.insertMany(dessertArray, function(error, dessertObject){});
    //comment object
    dessertArray.map(function(dessertX){
        //dessertsX represents an item in the array
        //.map method recreates the array after removing data
        Dessert.create(dessertX, function(err, dessertObject){
            //dessertObject saved to database
            if (err){
                console.log(err);
            } else {
//                console.log(dessertObject);
            }
              var commentObject = new Comment({ text: 'This is my favorit dessert. I eat it every day. Tastes great.', author: 'Joe' });
                        Comment.create(commentObject, function(err, comment){
                if (err){
                    console.log(err);
                } else {

                    //each dessert has a comment
                    //pushing the comment id (in dessert model) into object
                    dessertObject.comments.push(comment);
                    //pushing dummy comment into dessert
                    dessertObject.save();

                    }
            })    

    })       
    
        })
    }





module.exports = seedDB;
//exports seedDBfunction to other documents