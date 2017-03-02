var express = require ('express');
var app = express();
var validator = require("email-validator");
app.use(express.static('public'));

app.listen(3000, function(){
console.log('Express server is up on port 3000');
});
