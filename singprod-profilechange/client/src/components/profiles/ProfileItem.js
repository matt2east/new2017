import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import tempicon from '../../img/temp-icon.jpg';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={tempicon}
              alt="producer icon"
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.handle}</h3>
            {/* <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p> */}
            <p>
              {isEmpty(profile.location) ? null : (
                <span>from: {profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.demo1) ? null : (
                <span>{profile.demo1}</span>
              )}
            </p>
            <Link to={`/producer/${profile.handle}`} className="btn btn-info">
              View Producer
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <p>
              {isEmpty(profile.canrecord) ? null : (
                <span>Can record? <i>{profile.canrecord}</i></span>
              )}{' '}
              {isEmpty(profile.canwrite) ? null : (
                <span>Write songs? <i>{profile.canwrite}</i></span>
              )}
            </p>
            <p>
              {isEmpty(profile.commission) ? null : (
                <span>Paid work? <i>{profile.commission}</i></span>
              )}{' '}
              {isEmpty(profile.collab) ? null : (
                <span>Unpaid work? <i>{profile.collab}</i></span>
              )}
            </p>
          </div>
          {/* <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
