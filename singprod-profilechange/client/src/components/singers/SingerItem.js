import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import tempicon from "../../img/temp-icon.jpg";

class SingerItem extends Component {
  render() {
    const { singer } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={tempicon}
              alt="singer icon"
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{singer.handle}</h3>
            {/* <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p> */}
            <p>
              {isEmpty(singer.location) ? null : (
                <span>from: {singer.location}</span>
              )}
            </p>
            <p>
              {isEmpty(singer.demo1) ? null : (
                <span>{singer.demo1}</span>
              )}
            </p>
            <Link to={`/singer/${singer.handle}`} className="btn btn-info">
              View Singer
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <p>
              {isEmpty(singer.canrecord) ? null : (
                <span>Can record? <i>{singer.canrecord}</i></span>
              )}{' '}
              {isEmpty(singer.canwrite) ? null : (
                <span>Write songs? <i>{singer.canwrite}</i></span>
              )}
            </p>
            <p>
              {isEmpty(singer.commission) ? null : (
                <span>Paid work? <i>{singer.commission}</i></span>
              )}{' '}
              {isEmpty(singer.collab) ? null : (
                <span>Unpaid work? <i>{singer.collab}</i></span>
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

SingerItem.propTypes = {
  singer: PropTypes.object.isRequired
};

export default SingerItem;
