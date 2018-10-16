const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
//   test: {
// value: {
//   type: String
// }
  // },
  education: [
    {
      school: {
        type: String,
        required: true
      }
    }
  ],
  experience: [
    {
      prodName: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
