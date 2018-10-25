import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import tempicon from "../../img/temp-icon.jpg";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const demo1Url = profile.demo1;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            {isEmpty(profile.pic) ? (
              <img
                src={tempicon}
                alt="producer icon"
                className="rounded-circle"
              />
            ) : (
              <img
                src={profile.pic}
                alt="producer icon"
                className="rounded-circle"
              />
            )}
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>
              <i className="fas fa-headphones mr-1" /> {profile.handle}
            </h3>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>from: {profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.demo1) ? null : (
                <span>
                  <i className="fas fa-music text-info" />{" "}
                  <a href={demo1Url} target="_blank">
                    Demo #1
                  </a>
                </span>
              )}
            </p>
            <Link to={`/producer/${profile.handle}`} className="btn btn-info">
              View Producer
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <p>
              {isEmpty(profile.canrecord) ? null : (
                <span>
                  Can record? <i>{profile.canrecord}</i>
                </span>
              )}{" "}
              {isEmpty(profile.canwrite) ? null : (
                <span>
                  Write songs? <i>{profile.canwrite}</i>
                </span>
              )}
            </p>
            <p>
              {isEmpty(profile.commission) ? null : (
                <span>
                  Paid work? <i>{profile.commission}</i>
                </span>
              )}{" "}
              {isEmpty(profile.collab) ? null : (
                <span>
                  Unpaid work? <i>{profile.collab}</i>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
