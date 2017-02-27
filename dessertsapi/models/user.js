var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

