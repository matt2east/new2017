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

//app.get('http://api.screenshotlayer.com/api/capture?access_key=32b30ae03fb70d72a23249c87e48e0c9&url=http://trufyt.co&viewport=1440x900&fullpage=1&secret_key=704e6a60625d70b64a5e638c15972155', function(req, res) {
//    res.render('results');
//});

app.get('/results', function(req, res) {
    var pickUrl = req.query.nameUrl;
    console.log(pickUrl);
    request("http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url=http://trufyt.co",
            function (error, response) {
        if (!error && response.statusCode == 200) {
//            var data = JSON.parse(body);    
            res.render('results.ejs')
//            console.log(body);
        };
    })             
});  

//app.get('/results', function(req, res) {
//    var pickMovie = req.query.nameMovie;
////    console.log(pickMovie);
//    request("http://www.omdbapi.com/?t="+pickMovie+"&y=&plot=short&tomatoes=true&r=json",
//             function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//    var data = JSON.parse(body);
//          console.log(JSON.stringify(data, null, 2));
//        res.render('results.ejs', {data: data})
//       
//      };
//    })             
//});


//api key = 32b30ae03fb70d72a23249c87e48e0c9

//md5 hash = 704e6a60625d70b64a5e638c15972155

//http://api.screenshotlayer.com/api/capture
//    ? access_key = YOUR_ACCESS_KEY
//    & url = http://www.apple.com
//    & viewport = 1440x900
//    & fullpage = 1

//Customer key =2df3a8

//http://api.screenshotmachine.com/?key=12345&dimension=1024xfull&format=png&url=http://google.com



app.listen(3000);
console.log('Listening on port 3000');




