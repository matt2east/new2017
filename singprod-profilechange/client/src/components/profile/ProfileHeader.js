import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import { Link } from 'react-router-dom';
import tempicon from "../../img/temp-icon.jpg";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    const siteUrl = 'https://' + profile.website;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src={tempicon} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.handle}</h1>

              {/* {isEmpty(profile.demo1) ? null : <p>Producr Demo: {profile.demo1}</p>}
              {isEmpty(profile.demo2) ? null : <p>Demo #2: {profile.demo2}</p>}
              {isEmpty(profile.demo3) ? null : <p>Demo #3: {profile.demo3}</p>} */}
              {/* {isEmpty(profile.email) ? null : <p>Contact: {profile.email}</p>} */}
              {isEmpty(profile.location) ? null : (
                <p>
                  <i className="fa fa-globe" /> {profile.location}
                </p>
              )}
              <p>
                {isEmpty(profile.website) ? null : (
                  <span>
                    <i className="fas fa-external-link-alt"></i>{" "}
                    <a target="_blank" href={siteUrl} className="text-white">
                      Website
                    </a>
                  </span>
                )}
              </p>
              {/* {isEmpty(profile.canwrite) ? null : <p>Songwriter? {profile.canwrite}</p>}
              {isEmpty(profile.canrecord) ? null : <p>Can record? {profile.record}</p>}
              {isEmpty(profile.commission) ? null : <p>Accepts commissions? {profile.commission}</p>}
              {isEmpty(profile.collab) ? null : <p>Interested in collaboration? {profile.collab}</p>}
              {isEmpty(profile.bio) ? null : <p>Biography: {profile.bio}</p>}
              {/* <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
