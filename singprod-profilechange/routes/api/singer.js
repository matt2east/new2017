const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateSingerInput = require('../../validation/singer');
// const validateExperienceInput = require('../../validation/experience');
// const validateEducationInput = require('../../validation/education');

// Load Profile Model
const Singer = require('../../models/Singer');
// Load User Model
const User = require('../../models/User');

// @route   GET api/singer/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Singer Works' }));

// @route   GET api/singer
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Singer.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      .then(singer => {
        if (!singer) {
          errors.nosinger = 'There is no singer for this user';
          return res.status(404).json(errors);
        }
        res.json(singer);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/singer/all
// @desc    Get all singers
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

 Singer.find()
    .populate('user', ['name', 'avatar'])
    .then(singers => {
      if (!singers) {
        errors.nosinger = 'There are no singers';
        return res.status(404).json(errors);
      }

      res.json(singers);
    })
    .catch(err => res.status(404).json({ singer: 'There are no singers' }));
});

// @route   GET api/singer/handle/:handle
// @desc    Get singer by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Singer.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(singer => {
      if (!singer) {
        errors.nosinger = 'There is no singer for this user';
        res.status(404).json(errors);
      }

      res.json(singer);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/singer/user/:user_id
// @desc    Get singer by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Singer.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(singer => {
      if (!singer) {
        errors.nosinger = 'There is no singer for this user';
        res.status(404).json(errors);
      }

      res.json(singer);
    })
    .catch(err =>
      res.status(404).json({ singer: 'There is no singer for this user' })
    );
});

// @route   POST api/singer
// @desc    Create or edit user singer
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
    if (req.body.handle) singerFields.handle = req.body.handle;
    if (req.body.bio) singerFields.bio = req.body.bio;
    if (req.body.website) singerFields.website = req.body.website;
    if (req.body.email) singerFields.email = req.body.email;
    if (req.body.location) singerFields.location = req.body.location;
    if (req.body.demo1) singerFields.demo1 = req.body.demo1;
    if (req.body.demo2) singerFields.demo2 = req.body.demo2;
    if (req.body.demo3) singerFields.demo3 = req.body.demo3;
    if (req.body.canwrite) singerFields.canwrite = req.body.canwrite;
    if (req.body.canrecord) singerFields.canrecord = req.body.canrecord;
    if (req.body.commission) singerFields.commission = req.body.commission;
    if (req.body.collab) singerFields.collab = req.body.collab;
 
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
        Singer.findOne({ handle: singerFields.handle }).then(singer => {
          if (singer) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Singer(singerFields).save().then(singer => res.json(singer));
        });
      }
    });
  }
);

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
// router.post(
//   '/experience',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateExperienceInput(req.body);

//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     Profile.findOne({ user: req.user.id }).then(profile => {
//       const newExp = {
//         title: req.body.title,
//         company: req.body.company,
//         location: req.body.location,
//         from: req.body.from,
//         to: req.body.to,
//         current: req.body.current,
//         description: req.body.description
//       };

//       // Add to exp array
//       profile.experience.unshift(newExp);

//       profile.save().then(profile => res.json(profile));
//     });
//   }
// );

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
// router.post(
//   '/education',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateEducationInput(req.body);

//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     Profile.findOne({ user: req.user.id }).then(profile => {
//       const newEdu = {
//         school: req.body.school,
//         degree: req.body.degree,
//         fieldofstudy: req.body.fieldofstudy,
//         from: req.body.from,
//         to: req.body.to,
//         current: req.body.current,
//         description: req.body.description
//       };

//       // Add to exp array
//       profile.education.unshift(newEdu);

//       profile.save().then(profile => res.json(profile));
//     });
//   }
// );

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
// router.delete(
//   '/experience/:exp_id',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         // Get remove index
//         const removeIndex = profile.experience
//           .map(item => item.id)
//           .indexOf(req.params.exp_id);

//         // Splice out of array
//         profile.experience.splice(removeIndex, 1);

//         // Save
//         profile.save().then(profile => res.json(profile));
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
// router.delete(
//   '/education/:edu_id',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         // Get remove index
//         const removeIndex = profile.education
//           .map(item => item.id)
//           .indexOf(req.params.edu_id);

//         // Splice out of array
//         profile.education.splice(removeIndex, 1);

//         // Save
//         profile.save().then(profile => res.json(profile));
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Singer.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
