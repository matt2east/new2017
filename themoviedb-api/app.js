var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');
var request = require('request');
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/results', function(req, res) { 
    request("https://api.themoviedb.org/3/movie/now_playing?api_key=16c980fc486bd781188cf0d62e60f253&language=en-US",
            function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);    
            res.render('results.ejs', {data: data})
            console.log(body);
        };
    })             
});  


//api key = 16c980fc486bd781188cf0d62e60f253


app.listen(3000);
console.log('Listening on port 3000');




