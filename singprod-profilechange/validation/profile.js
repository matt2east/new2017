const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';
  data.demo1 = !isEmpty(data.demo1) ? data.demo1 : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  // data.status = !isEmpty(data.status) ? data.status : '';
  // data.skills = !isEmpty(data.skills) ? data.skills : '';

  // if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
  //   errors.handle = 'Handle needs to between 2 and 4 characters';
  // }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Producer moniker is required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio is required';
  }

  if (Validator.isEmpty(data.demo1)) {
    errors.demo1 = 'Link to hosted demo is required';
  }

  // if (!isEmpty(data.demo1)) {
    if (!Validator.isURL(data.demo1)) {
      errors.demo1 = 'Demo link is not valid';
    }
  // }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Contact email is required';
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
