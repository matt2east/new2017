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
db.once('openUri', function() {
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

app.get('/results', function(req, res) {
    Pirate.find(function(err, arg){
    res.render('results.ejs',{obj: arg})})
    
//    res.render('results.ejs');
});




app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/', function(req, res){
        Pirate.create(
    {link: req.body.newInput, id: req.body._id,})
console.log(req.body.newInput + " entry was created");
    console.log('redirect worked');
Pirate.find({}, function(err, docs) {
console.log(docs);
        res.redirect('/results');
 
});
})


app.listen(3000);
console.log('Listening on port 3000');




