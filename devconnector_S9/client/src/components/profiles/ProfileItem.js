import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

export default class ProfileItem extends Component {
  render() {
    const {profile} = this.props;
    return (
      <div className="card card-body bg-light mb-3">
      <div className="row">
      <div className="col-2">
      <img className="rounded-circle" src={profile.user.avatar} alt=""/> 
        </div>
        <div className="col-lg-6 col-lg-4 col-8">
        <h3>{profile.user.name}</h3>
        <p>{profile.status} {isEmpty(profile.company)? null : (<span>at {profile.company}</span>)}
        </p>
        <p>{isEmpty(profile.location) ? null : <span>{profile.location}</span> }</p>
        <Link to={`/profile/${profile.handle}`} className="btn btn-info">
        View Profile
        </Link>
        <div className="col-md-4 d-md-block d-none">
        <h4>Skill Set</h4>
        <ul className="list-group">
        {profile.skills.slice(0,4).map((skill, index) =>(
          <li key={index} className="list-group-item">
          <i className="fa fa-check pr-1" />
          {skill}
          </li>
        ))}
        </ul>
          </div>

        </div>

        </div>
      </div>
    )
  }
}

ProfileItem.PropTypes = {
  profile: PropTypes.object.isRequired
}


