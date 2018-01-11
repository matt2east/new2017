var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var request = require('request');
var mongo = require('mongodb');
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected to mongoose");
});

var pirateSchema = mongoose.Schema({
    link: String
});
var Pirate = mongoose.model('Pirate', pirateSchema);

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
    res.render('home');
});

	


app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post('/', function(req, res){
        Pirate.create(
    {link: req.body.newInput, id: req.body._id,})
console.log(req.body.newInput + " entry was created")
//Pirate.find({}, function(err, docs) {
//    if (!err){ 
//        console.log(docs);
//        process.exit();
//    } else {throw err;}
//});
})




//router.post('/', function(req, res){
////    console.log("posting new dessert")
//	Dessert.create( //.create = .new and .save
//	{ name: req.body.newDessertName, image: req.body.newDessertImage, description: 
//     req.body.newDessertDescription, id: req.body._id,
//     creator: {
//                username: req.user.username,
//                id: req.user.id
//            }
//    }, 
//        //data that's saving in DB
//	function(err, dessert){
//		if(err){
//			console.log(err);
//		} else {
////			 console.log("dessert creator is " + req.user.username);
//			res.redirect('/desserts'); //redirect is also a GET request!
//		}
//	})
//})







app.listen(3000);
console.log('Listening on port 3000');




