import React, {Component} from 'react';

class SignUp extends Component {
render (){
  return (
    <div className="form-inline">
    <h2>Sign up</h2>
    <div className="form-group">
    <input 
    className="form-control"
    placholder="password"
    type="password"
    />
        <input 
    className="form-control"
    placholder="email"
    type="text"
    />
    <button className="btn btn-primary"
    type="button">
    Sign Up
    </button>
    </div>
    </div>
  )
}
}

export default SignUp;