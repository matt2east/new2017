var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var request = require('request');
var mongo = require('mongodb');
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected to mongoose");
});

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
    res.render('home');
});








app.listen(3000);
console.log('Listening on port 3000');




