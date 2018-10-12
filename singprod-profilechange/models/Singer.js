const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SingerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
  },
  pic: {
    type: String
  },
  bio: {
    type: String
  },
  demo1: {
    type: String,
    required: true,
  },
  demo2: {
    type: String
  },
  demo3: {
    type: String
  },
  email: {
    type: String,
    required: true,
  }, 
  website: {
    type: String
  },  
  location: {
    type: String,
  },
  canwrite: {
    type: String,
  },
  canrecord: {
    type: String,
  },
 commission: {
    type: String,
  },
  collab: {
    type: String,
  },
});

module.exports = Singer = mongoose.model('singer', SingerSchema);
