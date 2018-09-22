import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createSinger, getCurrentSinger } from '../../actions/singerActions';
import isEmpty from '../../validation/is-empty';

class CreateSinger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySocialInputs: false,
      moniker: '',
      email: '',
      website: '',
      bio: '',
      pic: '',
      website: '',
      demo1: '',
      demo2: '',
      demo3: '',
      recording: '',
      songwriter: '',
      collab: '',
      paid: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentSinger();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.singer.singer) {
      const singer = nextProps.singer.singer;

      // Bring skills array back to CSV
      // const skillsCSV = singer.skills.join(',');

      // If singer field doesnt exist, make empty string
     singer.moniker = !isEmpty(singer.moniker) ? singer.moniker : '';
      singer.email = !isEmpty(singer.email) ? singer.email : '';
      singer.bio = !isEmpty(singer.bio) ? singer.bio : '';
      singer.pic = !isEmpty(singer.pic)
        ? singer.pic
        : '';
      singer.website = !isEmpty(singer.website) ? singer.website : '';
      singer.location = !isEmpty(singer.location) ? singer.location : '';
      singer.demo1 = !isEmpty(singer.demo1) ? singer.demo1 : '';
      singer.demo2 = !isEmpty(singer.demo2) ? singer.demo2 : '';
      singer.demo3 = !isEmpty(singer.demo3) ? singer.demo3 : '';
      singer.recording = !isEmpty(singer.recording) ? singer.recording : '';
      singer.songwriter = !isEmpty(singer.songwriter) ? singer.songwriter : '';
      singer.collab = !isEmpty(singer.collab) ? singer.collab : '';
      singer.paid = !isEmpty(singer.paid) ? singer.paid : '';
   

      // Set component fields state
      this.setState({
        moniker: singer.moniker,
        email: singer.email,
        bio: singer.bio,
        pic: singer.pic,
        website: singer.website,
        location: singer.location,
        demo1: singer.demo1,
        demo2: singer.demo2,
        demo3: singer.demo3,
        recording: singer.recording,
        songwriter: singer.songwriter,
        collab: singer.collab,
        paid: singer.paid
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const singerData = {
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

    this.props.createSinger(singerData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors
      // displaySocialInputs
     } = this.state;

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
      { label: 'yes', value: 'yes' },
      { label: 'no', value: 'no' },
      // { label: 'Junior Developer', value: 'Junior Developer' },
      // { label: 'Senior Developer', value: 'Senior Developer' },
      // { label: 'Manager', value: 'Manager' },
      // { label: 'Student or Learning', value: 'Student or Learning' },
      // { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      // { label: 'Intern', value: 'Intern' },
      // { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-singer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Singer Profile</h1>
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

CreateSinger.propTypes = {
  createSinger: PropTypes.func.isRequired,
  getCurrentSinger: PropTypes.func.isRequired,
  singer: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singer: state.singer,
  errors: state.errors
});

export default connect(mapStateToProps, { createSinger, getCurrentSinger })(
  withRouter(CreateSinger)
);