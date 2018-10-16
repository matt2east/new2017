import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: []
    };
}

  componentDidMount() {
    return fetch(`http://localhost:3000/api/users/all`)
      .then(res => res.json())
      .then(resJson => {
        // const users = res.data;
        this.setState({ users: resJson });
        // console.log(this.state)
        const userArray = this.state;
        // console.log(resJson);
        console.log(userArray.users);
      });
  }
//   componentDidMount(){
//     return fetch(`http://localhost:3000/api/users/all`)
//     .then((res) => res.json())
//     .then((resJson) => {
//         this.setState({users: resJson})
//         // console.log(this.state.test)
//         console.log(resJson)
//         console.log("state is " + (this.state.users))
//     });
// }


  render() {
    return <div>hello</div>;
  }
}

export default Users;
