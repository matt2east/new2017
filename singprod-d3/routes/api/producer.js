const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load User Model
const User = require('../../models/User');

//load Singer Model
const Producer = require('../../models/Producer');

// @route   GET api/singer/test
// @desc    Tests profile route
// @access  Public
// router.get('/test', (req, res) => res.json({ msg: 'Singer test Works' }));

//@route GET /api/singer/
//@desc get current singer profile
// @access  Private
// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Producer.findOne({ user: req.user.id })
      // .populate('user', ['name', 'avatar'])
      .then(producer => {
        if (!producer) {
          errors.noproducer = 'User has not set up a Producer Profile.';
          return res.status(404).json(errors);
        }
        res.json(producer);
      })
      .catch(err => res.status(404).json(err));
  }
);



module.exports = router;