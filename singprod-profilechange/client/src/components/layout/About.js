import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">About This Project</h1>
            </div>
          </div>
          <div className="card card-body bg-light mb-3">
          <h3 className="text-center">Goals</h3>
          <p>Here is why I did this project. Bla bla bla.</p>
          <h3 className="text-center">Technology</h3>
          <p>This is the technology I used to build this, and what I might do next. Bla bla bla</p>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
