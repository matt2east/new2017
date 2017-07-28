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
    var pickUrl = req.query.nameUrl;
    console.log(pickUrl);
    request("http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url="+pickUrl,
            function (error, response) {
        if (!error && response.statusCode == 200) {
//            var data = JSON.parse(body);    
            res.render('results.ejs')
//            console.log(body);
        };
    })             
});  

//app.get('/results', function(req, res) {
//    var pickUrl = req.query.nameMovie;
//    console.log(pickUrl);
//    request("http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url="+pickUrl,
//             function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//    var data = JSON.parse(body);
//          console.log(JSON.stringify(data, null, 2));
//        res.render('results.ejs', {data: data})
//       
//      };
//    })             
//});


//Customer key =2df3a8

//http://api.screenshotmachine.com/?key=12345&dimension=1024xfull&format=png&url=http://google.com



app.listen(3000);
console.log('Listening on port 3000');




