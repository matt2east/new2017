// var App = require('./views/app.js');
var mongoose = require('mongoose'); //import Mongoose methods
// Schema- defines the structure of any documents that will be stored in MongoDB collection
var dessertSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
      creator: 
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
module.exports = mongoose.model('Dessert', dessertSchema);
//exports the schema to other documents
