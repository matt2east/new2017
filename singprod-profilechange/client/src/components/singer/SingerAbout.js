import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class SingerAbout extends Component {
  render() {
    const { singer } = this.props;
    const demo1Url = singer.demo1;
    const demo2Url = singer.demo2;
    const demo3Url = singer.demo3;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-lg-6 col-md-4 col-8">
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
                <p>
                  {isEmpty(singer.demo2) ? null : (
                    <span>
                      <i className="fas fa-music text-info" />{" "}
                      <a href={demo2Url} target="_blank">
                        Demo #2
                      </a>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(singer.demo3) ? null : (
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
                  {isEmpty(singer.canrecord) ? null : (
                    <span>
                      Can record? <i>{singer.canrecord.toUpperCase()}</i>
                    </span>
                  )}{" "}
                  {isEmpty(singer.canwrite) ? null : (
                    <span>
                      Write songs? <i>{singer.canwrite.toUpperCase()}</i>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(singer.commission) ? null : (
                    <span>
                      Paid work? <i>{singer.commission.toUpperCase()}</i>
                    </span>
                  )}{" "}
                  {isEmpty(singer.collab) ? null : (
                    <span>
                      Unpaid work? <i>{singer.collab.toUpperCase()}</i>
                    </span>
                  )}
                </p>
                <p>
                  {isEmpty(singer.email) ? null : (
                    <span>
                      <i className="fas fa-envelope" /> <i>{singer.email}</i>
                    </span>
                  )}
                </p>
              </div>
            </div>
            <h3 className="text-center">{singer.handle}{' '}Biography</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {singer.bio}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingerAbout.propTypes = {
  singer: PropTypes.object.isRequired
};

export default SingerAbout;
