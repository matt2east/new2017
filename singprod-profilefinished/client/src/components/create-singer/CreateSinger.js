import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createSinger } from "../../actions/singerActions";

class CreateSinger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      moniker: "",
      email: "",
      bio: "",
      pic: "",
      website: "",
      location: "",
      demo1: "",
      demo2: "",
      demo3: "",
      recording: "",
      songwriter: "",
      collab: "",
      paid: "",
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
      moniker: this.state.moniker,
      email: this.state.email,
      bio: this.state.bio,
      pic: this.state.pic,
      website: this.state.website,
      location: this.state.location,
      demo1: this.state.demo1,
      demo2: this.state.demo2,
      demo3: this.state.demo3,
      recording: this.state.recording,
      songwriter: this.state.songwriter,
      collab: this.state.collab,
      paid: this.state.paid
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

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

    // Select options for status
    const options = [
      { label: "yes", value: "yes" },
      { label: "no", value: "no" }
      // { label: 'Junior Developer', value: 'Junior Developer' },
      // { label: 'Senior Developer', value: 'Senior Developer' },
      // { label: 'Manager', value: 'Manager' },
      // { label: 'Student or Learning', value: 'Student or Learning' },
      // { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      // { label: 'Intern', value: 'Intern' },
      // { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Create Your Singer Profile
              </h1>
              <p className="lead text-center">
                Let's get some information to make your singer profile stand out
              </p>
              {/* <small className="d-block pb-3">* = required fields</small> */}
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Moniker"
                  name="moniker"
                  value={this.state.moniker}
                  onChange={this.onChange}
                  error={errors.moniker}
                  info="A unique moniker for yourself as a singer"
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  // options={options}
                  error={errors.email}
                  info="Email address to contact you"
                />
                <TextFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Your bio as a singer"
                />
                <TextFieldGroup
                  placeholder="Pic"
                  name="pic"
                  value={this.state.pic}
                  onChange={this.onChange}
                  error={errors.pic}
                  info="Picture of singer"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Your website"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Your location"
                />
                <TextFieldGroup
                  placeholder="Demo #1"
                  name="demo1"
                  value={this.state.demo1}
                  onChange={this.onChange}
                  error={errors.demo1}
                  info="Audio demo"
                />
                <TextAreaFieldGroup
                  placeholder="Demo #2"
                  name="demo2"
                  value={this.state.demo2}
                  onChange={this.onChange}
                  error={errors.demo2}
                  info="Audio demo #2"
                />
                <TextAreaFieldGroup
                  placeholder="Demo #3"
                  name="demo3"
                  value={this.state.demo3}
                  onChange={this.onChange}
                  error={errors.demo3}
                  info="Audio demo #3"
                />
                <SelectListGroup
                  placeholder="Recording capability"
                  name="recording"
                  value={this.state.recording}
                  onChange={this.onChange}
                  options={options}
                  error={errors.recording}
                  info="Can you record where you are?"
                />
                <SelectListGroup
                  placeholder="Songwriter info"
                  name="songwriter"
                  value={this.state.songwriter}
                  onChange={this.onChange}
                  options={options}
                  error={errors.songwriter}
                  info="Do you write songs?"
                />
                <SelectListGroup
                  placeholder="Unpaid collaboration"
                  name="collab"
                  value={this.state.collab}
                  onChange={this.onChange}
                  options={options}
                  error={errors.collab}
                  info="Do you do unpaid collaboration projects?"
                />
                <SelectListGroup
                  placeholder="Paid work"
                  name="paid"
                  value={this.state.paid}
                  onChange={this.onChange}
                  options={options}
                  error={errors.paid}
                  info="Do you do paid work for hire projects?"
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
                </div> */}
                {/* {socialInputs} */}
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

CreateSinger.propTypes = {
  singer: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singer: state.singer,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createSinger }
)(withRouter(CreateSinger));
