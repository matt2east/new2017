import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
    // this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your SingProd account</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} 
                       onChange={this.onChange}
                       error={errors.name}
                required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email}
                       onChange={this.onChange}
                       error={errors.email}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password}
                       onChange={this.onChange}
                       error={errors.password}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2}
                       onChange={this.onChange}
                       error={errors.password2}/>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register;
