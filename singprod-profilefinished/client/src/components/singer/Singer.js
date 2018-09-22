import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ProfileHeader from './ProfileHeader';
// import ProfileAbout from './ProfileAbout';
// import ProfileCreds from './ProfileCreds';
// import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
// import { getProfileByHandle } from '../../actions/profileActions';

//singer
import { getSingerByMoniker } from '../../actions/singerActions';


class Singer extends Component {
  componentDidMount() {
    if (this.props.match.params.moniker) {
      this.props.getSingerByMoniker(this.props.match.params.moniker);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.singer.singer === null && this.props.singer.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { singer, loading } = this.props.singer;
    let singerContent;

    if (singer === null || loading) {
      singerContent = <Spinner />;
    } else {
      singerContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Singer Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          {/* <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} /> */}
          {/* <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          /> */}
          {/* {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null} */}
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{singerContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Singer.propTypes = {
  getSingerByMoniker: PropTypes.func.isRequired,
  singer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 singer: state.singer
});

export default connect(mapStateToProps, { getSingerByMoniker })(Singer);
