const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load User Model
const User = require('../../models/User');

//load Singer Model
const Singer = require('../../models/Singer');

// Load Validation
const validateSingerInput = require('../../validation/singer');

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

//@route POST /api/singer/
//@desc create current singer profile
// @access  Private
// @route   POST api/profile
// @desc    Get current users profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSingerInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const singerFields = {};
    singerFields.user = req.user.id;
    if (req.body.moniker) singerFields.moniker = req.body.moniker;
    if (req.body.bio) singerFields.bio = req.body.bio;
    if (req.body.email) singerFields.email = req.body.email;
    if (req.body.website) singerFields.website = req.body.website;
    if (req.body.pic) singerFields.pic = req.body.pic;
    if (req.body.demo1) singerFields.demo1 = req.body.demo1;
    if (req.body.demo2) singerFields.demo2 = req.body.demo2;
    if (req.body.demo3) singerFields.demo3 = req.body.demo3;
    if (req.body.collab) singerFields.collab = req.body.collab;
    if (req.body.paid) singerFields.paid = req.body.paid;
    if (req.body.songwriter)
      singerFields.songwriter = req.body.songwriter;


    Singer.findOne({ user: req.user.id }).then(singer => {
      if (singer) {
        // Update
        Singer.findOneAndUpdate(
          { user: req.user.id },
          { $set: singerFields },
          { new: true }
        ).then(singer => res.json(singer));
      } else {
        // Create

        // Check if handle exists
        Singer.findOne({ moniker: singerFields.moniker }).then(singer => {
          if (singer) {
            errors.moniker = 'That moniker already exists.';
            res.status(400).json(errors);
          }

          // Save Profile
          new Singer(singerFields).save().then(singer => res.json(singer));
        });
      }
    });
  }
);

module.exports = router;
