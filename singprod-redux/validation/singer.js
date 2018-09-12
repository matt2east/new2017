const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSingerInput(data) {
  let errors = {};

  data.moniker = !isEmpty(data.moniker) ? data.moniker : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.demo1 = !isEmpty(data.demo1) ? data.demo1 : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.recording = !isEmpty(data.recording) ? data.recording : "";
  // data.pic = !isEmpty(data.pic) ? data.pic : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.moniker)) {
    errors.moniker = "Moniker is required.";
  }

  // if (!isEmpty(data.demo1)) {
  //   errors.demo1 = "Demo field is empty";
  // }

  // if (!isEmpty(data.pic)) {
  //   errors.pic = "Pic field is empty";
  // }

  if (!Validator.isURL(data.demo1)) {
    errors.demo1 = "Need to have a demo link.";
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = "Bio is required.";
  }

  if (!Validator.isLength(data.bio, { min: 0, max: 2000 })) {
    errors.bio = "Bio must be less than 2000 characters.";
  }

  if (Validator.isEmpty(data.recording)) {
    errors.recording = "Recording is required.";
  }

  if (!Validator.isURL(data.website)) {
    errors.website = "Not a valid URL";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
