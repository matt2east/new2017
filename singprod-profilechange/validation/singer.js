const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSingerInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  // data.status = !isEmpty(data.status) ? data.status : '';
  // data.skills = !isEmpty(data.skills) ? data.skills : '';

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = 'Handle needs to between 2 and 4 characters';
  // }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Singer handle is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Singer location field is required';
  }

  // if (Validator.isEmpty(data.skills)) {
  //   errors.skills = 'Skills field is required';
  // }

  // if (!isEmpty(data.website)) {
  //   if (!Validator.isURL(data.website)) {
  //     errors.website = 'Not a valid URL';
  //   }
  // }

  // if (!isEmpty(data.youtube)) {
  //   if (!Validator.isURL(data.youtube)) {
  //     errors.youtube = 'Not a valid URL';
  //   }
  // }

  // if (!isEmpty(data.twitter)) {
  //   if (!Validator.isURL(data.twitter)) {
  //     errors.twitter = 'Not a valid URL';
  //   }
  // }

  // if (!isEmpty(data.facebook)) {
  //   if (!Validator.isURL(data.facebook)) {
  //     errors.facebook = 'Not a valid URL';
  //   }
  // }

  // if (!isEmpty(data.linkedin)) {
  //   if (!Validator.isURL(data.linkedin)) {
  //     errors.linkedin = 'Not a valid URL';
  //   }
  // }

  // if (!isEmpty(data.instagram)) {
  //   if (!Validator.isURL(data.instagram)) {
  //     errors.instagram = 'Not a valid URL';
  //   }
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};