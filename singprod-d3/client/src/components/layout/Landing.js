import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">SingProd (This name sucks, haha.)
                </h1>
                {/* <p className="lead">Create a profile to showcase your singer portfolio, music portfolio, or both. Discover talent to work on new music with!</p> */}
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light mr-2">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
