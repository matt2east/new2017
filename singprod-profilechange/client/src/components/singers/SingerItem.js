import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class SingerItem extends Component {
  render() {
    const { singer } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={singer.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{singer.user.name}</h3>
            {/* <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p> */}
            <p>
              {isEmpty(singer.location) ? null : (
                <span>{singer.location}</span>
              )}
            </p>
            <Link to={`/singer/${singer.handle}`} className="btn btn-info">
              View Singer
            </Link>
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

SingerItem.propTypes = {
 singer: PropTypes.object.isRequired
};

export default SingerItem;
