var express = require('express');
var app = express();
var _ = require('underscore');

var toDoArray = [{
"description": "Pencil the comic",
"completed": false,
"id": 1   
},
{
"description": "Visit the comixology",
"completed": false,
"id": 2    
}]

var port = process.env.PORT || 3000;
console.log('My todoAPI is running on port 3000')

app.get ('/', function(req, res){
      console.log('The todo app s running, To access it go to /todos')
    res.send('The todo app s running, To access it go to /todos')
});

app.get('/todos', function(req, res){
console.log(toDoArray);
res.json(toDoArray);
});

app.get('/todos/:id', function(req, res) {
    var paramId = parseInt(req.params.id);
    toDoArray.forEach(function(toDoItem){
    if (toDoItem.id == paramId){
        console.log(toDoItem);
        res.json(toDoItem);
    };
})
});    
    
var server = app.listen(3000, function () {
  console.log('Listening on port 3000!');
});