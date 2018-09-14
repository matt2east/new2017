import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get('/api/users/all')
      .then(res => {
        const users = res.data;
        this.setState({ users });
        console.log(this.state)
      })
  }
  render() {
    return (
      <div>
        users
      </div>
    )
  }
}

export default Users;
