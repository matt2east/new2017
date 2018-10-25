import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import tempicon from "../../img/temp-icon.jpg";

class SingerHeader extends Component {
  render() {
    const { singer } = this.props;
    const siteUrl = singer.website;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
              {isEmpty(singer.pic) ? (
              <img
                src={tempicon}
                alt="singer icon"
                className="rounded-circle"
              />
            ) : (
              <img
                src={singer.pic}
                alt="singer icon"
                className="rounded-circle"
              />
            )}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center"><i className="fas fa-microphone mr-1" /> {singer.handle}</h1>
              {isEmpty(singer.location) ? null : (
                <p>
                  <i className="fa fa-globe" /> {singer.location}
                </p>
              )}
              <p>
                {isEmpty(singer.website) ? null : (
                  <span>
                    <i className="fas fa-external-link-alt"></i>{" "}
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

export default SingerHeader;
