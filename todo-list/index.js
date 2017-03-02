var express = require('express');
var app = express();
var underscore = _ = require('underscore');
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
var toDoArray = [{
    "description": "Pencil the comic",
    "completed": false,
    "id": 1   
},
{
    "description": "Visit the comixology",
    "completed": true,
    "id": 2    
}];




var nextId = 3;
var port = process.env.PORT || 3000;
console.log('My todoAPI is running on port 3000')

app.use(bodyParser.json()); 
  

app.get ('/', function(req, res){
    console.log('The todo app s running, To access it go to /todos')
    res.send('The todo app s running, To access it go to /todos')
});

// GET all To Do s
app.get('/todos', function(req, res){
    console.log(toDoArray);
    res.json(toDoArray);
});

//// GET a specific To Do
app.get('/todos/:id', function(req, res) {
    //assign id from uri to an int variable
    var toDoId = parseInt(req.params.id);  
    
    //loop through the todoArray to find a match and return the array item
    if (_.isUndefined(underscore.findWhere(toDoArray, {id: toDoId}))) {
        // if undefined then return not matched 
        res.status(404).send("To Do id not matched");   
    } else {
        res.json(_.find(toDoArray, {id: toDoId}));        
    };
});

// POST a To Do
app.post('/todos', function (req, res) {
  var body = underscore.pick(req.body, 'description', 'completed');

    console.log('the body is ',  body)
        body.id = nextId++
        body.description = body.description.trim();
    if(underscore.isBoolean(body.completed) && underscore.isString(body.description) &&  
       body.description.trim().length >0 && body.description.trim().length <20){

        body.id = nextId++
body.description = body.description.trim();
        // apply the next id
//        body.id = nextId++;
  
        console.log(body.id);
        
        // add the new to do to the to do array   
        toDoArray.push(body);

        // return the newly created to do with the new id    
        res.json(body);
        
    }
    
    res.status(400).send();
   
});
//
//DELETE todo
app.delete('/todos/:id', function(req, res){
    //assign variable to id to delete from array
        var toDeleteId = parseInt(req.params.id);
    
    //assign object to remove from array to a variable
        objToDelete = _.findWhere(toDoArray, {id: toDeleteId});
    
    //find id to delete in array and remove 
        toDoArray = _.without(toDoArray, objToDelete);
    
    //return object that was deleted
        res.json(objToDelete);
});     
//
//
// PUT todo
app.put('/todos/:id', function(req, res){
    //assign id from uri to an int variable
    var toDoId = parseInt(req.params.id);
    //assign the requested array array item
    var toggleToDo = _.findWhere(toDoArray, {id: toDoId});
    //toggle the completed object
    toggleToDo.completed = !toggleToDo.completed;
    res.json(toDoArray);
});  
//
//
//
////bool = !bool;
//
//


app.listen(port, function(){
  console.log('listening on ', port);
});

//put route changes status

module.exports = app;
