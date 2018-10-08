const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSingerInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';
  data.demo1 = !isEmpty(data.demo1) ? data.demo1 : '';
  data.email = !isEmpty(data.email) ? data.email : '';

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Producer moniker is required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio is required';
  }

  if (Validator.isEmpty(data.demo1)) {
    errors.demo1 = 'Link to hosted demo is required';
  }

    if (!Validator.isURL(data.demo1)) {
      errors.demo1 = 'Demo link is not valid';
    }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Contact email is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
