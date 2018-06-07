const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
 
// Load User model
const User = require('../../models/User');

router.get('/test', (req,res)=> res.json({
  msg: 'users works'
}));

router.post('/register', (req, res)=>{
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
  

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        // avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
}) 


module.exports = router;
