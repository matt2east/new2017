var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var request = require('request');
app.set('view engine', 'ejs');

//
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(req, res) {
     var inputMovie =  req.query.nameMovie;
    request("http://www.omdbapi.com/?s="+inputMovie,
            function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);    
            res.render('results.ejs', {data: data})
        };
    })             
});
app.get('/:id/details', function(req, res) {
     var movie =  req.params.id;
    request("http://www.omdbapi.com/?i="+movie+"&plot=full",
            function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);    
            res.render('details.ejs', {data: data});
        };
    })             
});
app.listen(3000);
console.log('Listening on port 3000');