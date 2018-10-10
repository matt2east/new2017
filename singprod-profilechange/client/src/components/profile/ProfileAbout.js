import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const demo1Url = 'https://' + profile.demo1;
    const demo2Url = 'https://' + profile.demo2;
    const demo3Url = 'https://' + profile.demo3;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-lg-6 col-md-4 col-8">
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
                <p>
                  {isEmpty(profile.demo2) ? null : (
                    <span>
                      <i className="fas fa-music text-info" />{" "}
                      <a href={demo2Url} target="_blank">
                        Demo #2
                      </a>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(profile.demo3) ? null : (
                    <span>
                      <i className="fas fa-music text-info" />{" "}
                      <a href={demo3Url} target="_blank">
                        Demo #3
                      </a>
                    </span>
                  )}
                </p>
              </div>
              <div className="col-md-6 d-none d-md-block text-info">
                <p >
                  {isEmpty(profile.canrecord) ? null : (
                    <span>
                      Can record? <i>{profile.canrecord.toUpperCase()}</i>
                    </span>
                  )}{" "}
                  {isEmpty(profile.canwrite) ? null : (
                    <span>
                      Write songs? <i>{profile.canwrite.toUpperCase()}</i>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(profile.commission) ? null : (
                    <span>
                      Paid work? <i>{profile.commission.toUpperCase()}</i>
                    </span>
                  )}{" "}
                  {isEmpty(profile.collab) ? null : (
                    <span>
                      Unpaid work? <i>{profile.collab.toUpperCase()}</i>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(profile.email) ? null : (
                    <span>
                      <i className="fas fa-envelope" /> <i>{profile.email}</i>
                    </span>
                  )}
                </p>
              </div>
            </div>
            <h3 className="text-center">{profile.handle}{' '}Biography</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {profile.bio}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
