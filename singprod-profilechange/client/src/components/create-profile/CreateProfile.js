import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      handle: "",
      email: "",
      website: "",
      location: "",
      demo1: "",
      demo2: "",
      demo3: "",
      bio: "",
      canwrite: "",
      canrecord: "",
      commission: "",
      collab: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      email: this.state.email,
      website: this.state.website,
      location: this.state.location,
      demo1: this.state.demo1,
      demo2: this.state.demo2,
      demo3: this.state.demo3,
      bio: this.state.bio,
      canwrite: this.state.canwrite,
      canrecord: this.state.canrecord,
      commission: this.state.commission,
      collab: this.state.collab
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // let socialInputs;

    // if (displaySocialInputs) {
    //   socialInputs = (
    //     <div>
    //       <InputGroup
    //         placeholder="Twitter Profile URL"
    //         name="twitter"
    //         icon="fab fa-twitter"
    //         value={this.state.twitter}
    //         onChange={this.onChange}
    //         error={errors.twitter}
    //       />

    //       <InputGroup
    //         placeholder="Facebook Page URL"
    //         name="facebook"
    //         icon="fab fa-facebook"
    //         value={this.state.facebook}
    //         onChange={this.onChange}
    //         error={errors.facebook}
    //       />

    //       <InputGroup
    //         placeholder="Linkedin Profile URL"
    //         name="linkedin"
    //         icon="fab fa-linkedin"
    //         value={this.state.linkedin}
    //         onChange={this.onChange}
    //         error={errors.linkedin}
    //       />

    //       <InputGroup
    //         placeholder="YouTube Channel URL"
    //         name="youtube"
    //         icon="fab fa-youtube"
    //         value={this.state.youtube}
    //         onChange={this.onChange}
    //         error={errors.youtube}
    //       />

    //       <InputGroup
    //         placeholder="Instagram Page URL"
    //         name="instagram"
    //         icon="fab fa-instagram"
    //         value={this.state.instagram}
    //         onChange={this.onChange}
    //         error={errors.instagram}
    //       />
    //     </div>
    //   );
    // }

    const options = [
      { label: "Yes or No?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Producer Profile</h1>
              {/* <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p> */}
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Producer moniker"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Your producer moniker or artist name, such as: Butch Vig, Skrillex, etc."
                />
                <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="How do we contact you?"
                />
                <TextAreaFieldGroup
                  placeholder="My music producer bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a about yourself."
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Music producer website."
                />
                <TextFieldGroup
                  placeholder="* Producer demo"
                  name="demo1"
                  value={this.state.demo1}
                  onChange={this.onChange}
                  error={errors.demo1}
                  info="Music producer demo / portfolio link."
                />
                <TextFieldGroup
                  placeholder="Additional demo"
                  name="demo2"
                  value={this.state.demo2}
                  onChange={this.onChange}
                  error={errors.demo2}
                  info="Additional demo (if needed)."
                />
                <TextFieldGroup
                  placeholder="Another additional demo"
                  name="demo3"
                  value={this.state.demo3}
                  onChange={this.onChange}
                  error={errors.demo3}
                  info="aAnother additional demo (if needed)."
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Your geographical location. Such as: Austin, Texas"
                />
                <SelectListGroup
                  name="canwrite"
                  value={this.state.canwrite}
                  onChange={this.onChange}
                  options={options}
                  error={errors.canwrite}
                  info="Do you write songs?"
                />
                <SelectListGroup
                  name="canrecord"
                  value={this.state.canrecord}
                  onChange={this.onChange}
                  options={options}
                  error={errors.canrecord}
                  info="Can you do live recording where you are?"
                />
                <SelectListGroup
                  name="commission"
                  value={this.state.commission}
                  onChange={this.onChange}
                  options={options}
                  error={errors.commission}
                  info="Are you looking to be paid up-front?"
                />
                <SelectListGroup
                  name="collab"
                  value={this.state.collab}
                  onChange={this.onChange}
                  options={options}
                  error={errors.collab}
                  info="Are you looking for a collaboration?"
                />
                {/* <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs} */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
