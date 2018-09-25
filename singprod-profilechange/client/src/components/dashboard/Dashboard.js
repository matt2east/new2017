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

  // onDeleteClick(e) {
  //   this.props.deleteAccount();
  // }


  // onDeleteClick2(e) {
  //   this.props.deleteSinger();
  // }

  render() {
    console.log(this.props)
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    // const { singer } = this.props.singer;

    let dashboardContent;

    // if (profile === null || loading) {
    //   dashboardContent = <Spinner />;
    // } else {
      // Check if logged in user has profile data
    //   if (Object.keys(profile).length > 0) {
    //     dashboardContent = (
    //       <div>
    //         <p className="lead text-muted">
    //           Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
    //         </p>
    //         <ProfileActions />
    //         <SingerActions />
    //         {/* <Experience experience={profile.experience} />
    //         <Education education={profile.education} /> */}
    //         <div style={{ marginBottom: '60px' }} />
    //         <button
    //           onClick={this.onDeleteClick.bind(this)}
    //           className="btn btn-danger"
    //         >
    //           Delete My Account
    //         </button>
    //       </div>
    //     );
    //   } else {
    //     // User is logged in but has no profile
    //     dashboardContent = (
    //       <div>
    //         <p className="lead text-muted">Welcome {user.name}</p>
    //         <p>You have not yet setup a profile, please add some info</p>
    //         <Link to="/create-profile" className="btn btn-lg btn-info">
    //           Create Profile
    //         </Link>
    //       </div>
    //     );
    //   }
    // }
    dashboardContent = <div>test</div>;
  
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
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
