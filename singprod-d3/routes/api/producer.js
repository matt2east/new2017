const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load User Model
const User = require('../../models/User');

//load Producer Model
const Producer = require('../../models/Producer');

// Load Validation
const validateProducerInput = require('../../validation/producer');

// @route   GET api/producer/test
// @desc    Tests profile route
// @access  Public
// router.get('/test', (req, res) => res.json({ msg: 'Producer test Works' }));

//@route GET /api/producer/
//@desc get current producer profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Producer.findOne({ user: req.user.id })
      .populate('user', ['name'])
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

//@route GET /api/producer/user/:user_id
//@desc get producer by ID
// @access  Public
router.get("/user/:user_id", (req, res) => {
  const errors = {};
Producer.findOne({user: req.params.user_id})
.populate("user", ["name"])
.then(producer => {
  if (!producer) {
    errors.producer = "User has not set up a Producer Profile.";
    return res.status(404).json(errors);
  }
  res.json(producer);
})
.catch(err => res.status(404).json({profile: 'no profile for this user' }));
});

// @route   GET api/producers/all
// @desc    Get all producers
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

 Producer.find()
    .populate('user', ['name'])
    .then(producers => {
      if (!producers) {
        errors.noproducer = 'There are no producer profiles';
        return res.status(404).json(errors);
      }

      res.json(producers);
    })
    .catch(err => res.status(404).json({ profile: 'There are no producer profiles' }));
});

//@route GET /api/singer/handle/:handle
//@desc get singer by handle
// @access  Public
// router.get("/handle/:handle", (req, res) => {
//   const errors = {};
// Singer.findOne({handle: req.params.handle})
// .populate("user", ["name"])
// .then(singer => {
//   if (!singer) {
//     errors.nosinger = "User has not set up a Singer Profile.";
//     return res.status(404).json(errors);
//   }
//   res.json(singer);
// })
// .catch(err => res.status(404).json(err));
// });

//@route POST /api/producer/
//@desc create  or edit current producer profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProducerInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const producerFields = {};
   producerFields.user = req.user.id;
    if (req.body.moniker) producerFields.moniker = req.body.moniker;
    if (req.body.bio) producerFields.bio = req.body.bio;
    if (req.body.email) producerFields.email = req.body.email;
    if (req.body.website) producerFields.website = req.body.website;
    if (req.body.location) producerFields.location = req.body.location;
    if (req.body.pic) producerFields.pic = req.body.pic;
    if (req.body.demo1) producerFields.demo1 = req.body.demo1;
    if (req.body.demo2) producerFields.demo2 = req.body.demo2;
    if (req.body.demo3) producerFields.demo3 = req.body.demo3;
    if (req.body.collab) producerFields.collab = req.body.collab;
    if (req.body.recording) producerFields.recording = req.body.recording;
    if (req.body.paid) producerFields.paid = req.body.paid;
    if (req.body.songwriter)
      producerFields.songwriter = req.body.songwriter;

    Producer.findOne({ user: req.user.id }).then(producer => {
      if (producer) {
        // Update
        Producer.findOneAndUpdate(
          { user: req.user.id },
          { $set: producerFields },
          { new: true }
        ).then(producer => res.json(producer));
      } else {
        // Create

        // Check if handle exists
        Producer.findOne({ moniker: producerFields.moniker }).then(producer => {
          if (producer) {
            errors.moniker = 'That moniker already exists.';
            res.status(400).json(errors);
          }

          // Save Profile
          new Producer(producerFields).save().then(producer => res.json(producer));
        });
      }
    });
  }
);

// @route   DELETE api/producer
// @desc    Delete user and producer profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Producer.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;