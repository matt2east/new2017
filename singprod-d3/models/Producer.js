const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProducerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  moniker: {
    type: String,
    required: true,
    max: 40
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true,
    max: 2000
  },
  pic: {
    type: String
  },
  website: {
    type: String
  },
  // location: {
  //   type: String
  // },
  demo1: {
    type: String,
    required: true
  },
  demo2: {
    type: String
  },
  demo3: {
    type: String
  },
  recording: {
    type: String,
    required: true
  },
  songwriter: {
    type: String
  },
  collab: {
    type: String
  },
  paid: {
    type: String
  }
});

module.exports = Producer = mongoose.model('producer', ProducerSchema);