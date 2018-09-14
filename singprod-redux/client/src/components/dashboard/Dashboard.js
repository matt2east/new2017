
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
 import { getCurrentProfile
  // deleteAccount 
} from '../../actions/profileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}



export default connect(
  // mapStateToProps, 
  null,
  { getCurrentProfile
  // deleteAccount 
})(
  Dashboard
);