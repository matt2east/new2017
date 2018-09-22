import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

//singer
import { getCurrentSinger, deleteSinger } from '../../actions/singerActions';
import SingerActions from './SingerActions';

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
    this.props.getCurrentSinger();
  }

  onDeleteClick(e) {
    // this.props.deleteAccount();
    this.props.deleteSinger();
  }

  render() {
    const { user } = this.props.auth;
    const { singer, loading } = this.props.singer;

    let dashboardContent;

    if (singer === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(singer).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/singer/${singer.moniker}`}>{user.name}</Link>
            </p>
            <SingerActions />
            {/* <Experience experience={profile.experience} />
            <Education education={profile.education} /> */}
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a singer profile, please add some info</p>
            <Link to="/create-singer" className="btn btn-lg btn-info">
              Create Singer Profile
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
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentSinger: PropTypes.func.isRequired,
  deleteSinger: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  singer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singer: state.singer,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentSinger, deleteSinger })(
  Dashboard
);
