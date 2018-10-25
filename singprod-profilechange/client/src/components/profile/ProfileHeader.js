import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
import tempicon from "../../img/temp-icon.jpg";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    const siteUrl = "http://" + profile.website;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
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
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">
                <i className="fas fa-headphones mr-1" />
                {profile.handle}
              </h1>
              {isEmpty(profile.location) ? null : (
                <p>
                  <i className="fa fa-globe" /> {profile.location}
                </p>
              )}
              <p>
                {isEmpty(profile.website) ? null : (
                  <span>
                    <i className="fas fa-external-link-alt" />{" "}
                    <a target="_blank" href={siteUrl} className="text-white">
                      Website
                    </a>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
