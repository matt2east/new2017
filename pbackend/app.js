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
var pirate = mongoose.model('pirate', pirateSchema);

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

app.post("/", function (req, res) {
    console.log(req.body.user.name)
});







app.listen(3000);
console.log('Listening on port 3000');




