const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProducerInput(data) {
  let errors = {};

  data.moniker = !isEmpty(data.moniker) ? data.moniker : '';
  data.website = !isEmpty(data.website) ? data.website : '';
  data.demo1 = !isEmpty(data.demo1) ? data.demo1 : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';
  data.email = !isEmpty(data.email) ? data.email : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!Validator.isLength(data.moniker, { min: 0, max: 40 })) {
    errors.moniker = 'Moniker must be less than 40 characters.';
  }

  if (!isEmpty(data.demo1)) {
    if (!Validator.isURL(data.demo1)) {
      errors.demo1 = 'Not a valid URL.';
    }
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio is required.';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL.';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};