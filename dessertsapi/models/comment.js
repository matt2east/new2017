//comments array

// var App = require('./views/app.js');
var mongoose = require('mongoose'); //import Mongoose methods
// Schema- defines the structure of any documents that will be stored in MongoDB collection
var commentSchema = new mongoose.Schema({
    text: String,
    author: 
    { 
             id: 
             {
                 type: mongoose.Schema.Types.ObjectId,
                 ref: 'User'
             },
        username: String
    }
  //http://stackoverflow.com/questions/34985846/mongoose-document-references-with-a-one-to-many-relationship
}); //http://mongoosejs.com/docs/populate.html

//You’ll want to modify your comment model so that author now takes an object containing id and username.




module.exports = mongoose.model('Comment', commentSchema);
//exports the schema to other documents

