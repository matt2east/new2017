import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import tempicon from "../../img/temp-icon.jpg";

class SingerItem extends Component {
  render() {
    const { singer } = this.props;
    const demo1Url = "https://" + singer.demo1;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
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
          <div className="col-lg-6 col-md-4 col-8">
            <h3><i className="fas fa-microphone mr-1" /> {singer.handle}</h3>
            <p>
              {isEmpty(singer.location) ? null : (
                <span>from: {singer.location}</span>
              )}
            </p>
            <p>
              {isEmpty(singer.demo1) ? null : (
                <span>
                  <i className="fas fa-music text-info" />{" "}
                  <a href={demo1Url} target="_blank">
                    Demo #1
                  </a>
                </span>
              )}
            </p>
            <Link to={`/singer/${singer.handle}`} className="btn btn-info">
              View Singer
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <p>
              {isEmpty(singer.canrecord) ? null : (
                <span>
                  Can record? <i>{singer.canrecord}</i>
                </span>
              )}{" "}
              {isEmpty(singer.canwrite) ? null : (
                <span>
                  Write songs? <i>{singer.canwrite}</i>
                </span>
              )}
            </p>
            <p>
              {isEmpty(singer.commission) ? null : (
                <span>
                  Paid work? <i>{singer.commission}</i>
                </span>
              )}{" "}
              {isEmpty(singer.collab) ? null : (
                <span>
                  Unpaid work? <i>{singer.collab}</i>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SingerItem.propTypes = {
  singer: PropTypes.object.isRequired
};

export default SingerItem;
