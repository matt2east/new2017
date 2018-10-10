import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createSinger} from "../../actions/singerActions";

class CreateSinger extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const singerData = {
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

    this.props.createSinger(singerData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const options = [
      { label: "Yes or No?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ];

    return (
      <div className="create-singer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your singer</h1>
              <p className="lead text-center">
                Let's get some information to make your singer stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Singer moniker"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Your singer moniker or artist name, such as: Frank Sinatra, Madonna, etc."
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
                  placeholder="* My singer bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a about yourself."
                />
                <TextFieldGroup
                  placeholder="* Singer demo"
                  name="demo1"
                  value={this.state.demo1}
                  onChange={this.onChange}
                  error={errors.demo1}
                  info="Music singer demo / portfolio link."
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Music singer website."
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
                  info="Another additional demo (if needed)."
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
