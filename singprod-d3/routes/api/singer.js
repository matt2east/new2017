const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load User Model
const User = require('../../models/User');

//load Singer Model
const Singer = require('../../models/Singer');

// @route   GET api/singer/test
// @desc    Tests profile route
// @access  Public
// router.get('/test', (req, res) => res.json({ msg: 'Singer test Works' }));

//@route GET /api/singer/
//@desc GET current singer profile
// @access  Private
// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Singer.findOne({ user: req.user.id })
      // .populate('user', ['name', 'avatar'])
      .then(singer => {
        if (!singer) {
          errors.nosinger = 'User has not set up a Singer Profile.';
          return res.status(404).json(errors);
        }
        res.json(singer);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
