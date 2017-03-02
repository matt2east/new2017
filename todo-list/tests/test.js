//var request = require('supertest');
//var path = require("path");
//
//var app = require(path.join(_dirname, '..', 'server.js'));
//
//describe('Tests / todo GET routes', function(done){
//    it('Should return a 200 status code, JSON and pencil', function(){
//    request(app)
//        .get('/todos')
//        .expect(200)
//        .expect ('Content-type', /json/, done)
//        .expect (/pencil/i, done)
//    });
//    it ('Should return a JSON object with a length of 1', function(done){
//        reqest(app)
//        .get ('todos/json/1')
//        .expect(200)
//        .expect('Content-type', /json/i)
//        .expect(/pencil the comic/i, done)
//    })
//})

//-------
var index = module.index = {};
var test = require('supertest');
    path = require('path');
    app  = require(path.join(__dirname, '..', 'index'));
var supertest = require('supertest');
var app = require('../index.js');

describe('GET items test', function(){
//describe bundles functions together in which "it" is understood    
    it('Should return 200 status for /todos', function(done){
        test(app)
            .get('/todos')
            .expect('Content-Type', /json/)
//overloaded method - can do many things depending on body        
            .expect(/pencil/i)
        // i = case insensitive
            .expect(200, done)
        //done is a function
    });
});
describe('GET item test', function(){
    it('Should return 200 status for /todos', function(done){
        test(app)
            .get('/todos/2')
            .expect('Content-Type', /json/)
            .expect(/visit/i)
            .expect(200, done)
    });
});
describe('POST items test', function(){
    it('should return 200 status for /todos', function(done){
        test(app)
        .post('/todos')
        .set('Accept','application/json')
        .send({"description":"new todo", "completed": false})
        .expect(200, done)
    });
         
});
//describe('POST with extra spaces gets trimmed', fuçnction(){
//    it('should pass for /todos', function(done){
//        test(app)
//        .post('/todos')
//         .set('Accept','application/json').set
//        .send({"description":"       new doto     ", "completed" :false})
//        .expect(200, done)
//    });
//});
//describe('GET fake item', function(){
//    it('should return 200 status for /todos', function(done){
//        test(app)
//        .get('/todos/c')
//        .set('Accept','application/json')
//        .send({"description":"new todo", "completed": false})
//        .expect(function (res) {
//                if(res.body.id != NaN) {
//                    throw new Error('not an id')
//                }
//       
//        });
//    });
//     .expect(200, done)}
//}); 
it('should return a 200 status code and trimmed description', function (done) {
        test(app)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "    new item     ", completed: true})
            .expect(200, done)
            .expect(function (res) {
                if(res.body.description.length != 8) {
                    throw new Error('Description length is wrong')
                }
            });
    });
it('should prevent inserting a todo with all blank spaces', function(done){
    test(app)   
    .post ('/todos')
    .set('Accept', 'application/json')
    .send ({description:"    ", completed: false})
    .expect(400, done)
//callback function - function tht runs after first function completes    
;
});
// if (err) throw err;
         