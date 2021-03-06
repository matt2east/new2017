import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';

import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
// import Experience from './Experience';
// import Education from './Education';
import SingerActions from './SingerActions';
import { getCurrentSinger, deleteSinger } from '../../actions/singerActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getCurrentSinger();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
    window.location.reload();
  }


  onDeleteClick2(e) {
    this.props.deleteSinger();
    window.location.reload();
  }

  render() {
    console.log(this.props)
    // console.log(this.state)
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { singer, loading2 } = this.props.singer;

    let dashboardContent;
    let singerContent;
    let greeting;

  //   if (profile === null || loading && singer === null || loading2){
  //     greeting = (<div></div>)
  //   }
  //   else 
  //     if (Object.keys(profile).length > 0 && Object.keys(singer).length > 0){
  //       greeting = (<div></div>)
  //     }
  // else {
  //     greeting = (<p>Thank you for signing up. Now it's time to create a Singer and / or Producer profile.</p>)
  //   }


    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div >  
            <p className="lead text-muted">
              Producer profile: <Link to={`/producer/${profile.handle}`}>{profile.handle}</Link>
            </p>
            {/* <p>{profile.demo1}</p> */}
            <ProfileActions />
            {/* <Experience experience={profile.experience} />
            <Education education={profile.education} /> */}
            <div />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-dark"
            >
              Delete Producer 
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            {/* <p className="lead text-muted">Welcome {user.name}</p> */}
            {/* <p>You have not yet setup a producer profile, please add some info</p> */}
            <Link to="/create-producer" className="btn btn-lg btn-info">
              Create Producer 
            </Link>
          </div>
        );
      }
    }
//singer dashboard
if (singer === null || loading2) {
  singerContent = <Spinner />;
} else {
  //Check if logged in user has profile data
  if (Object.keys(singer).length > 0) {
    singerContent = (
      <div>
      <p className="lead text-muted">
        Singer profile: <Link to={`/singer/${singer.handle}`}>{singer.handle}</Link>
      </p>
      <SingerActions />
      <div />
      <button
        onClick={this.onDeleteClick2.bind(this)}
        className="btn btn-dark"
      >
        Delete Singer
      </button>
    </div>
    );
  } else {
    // User is logged in but has no profile
    singerContent = (
      <div>
        <Link to="/create-singer" className="btn btn-lg btn-info">
          Create Singer
        </Link>
      </div>
    );
  }
}


  
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <h4>Welcome, {user.name}!</h4>
              {greeting}
              {dashboardContent}
              <br/>
              {singerContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
 
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  getCurrentSinger: PropTypes.func.isRequired,
  deleteSinger: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  singer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  singer: state.singer,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, 
  getCurrentSinger, deleteSinger })(
  Dashboard
);
