import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from './sessions.json';

//console.log(jsonData.title);
var data = require('./sessions.json'); 
console.log(data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName);
//console.log(data.Items[0].Title);
//console.log(data.Items[0].Description);
//console.log(data.Items[0].Room.Name);

for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.title);
}

//var data = require('./sessions.json'); 



class App extends Component {
constructor(props) {
  super(props);
//  this.handleUser = this.handleUser.bind(this);
//  this.handlePassword = this.handlePassword.bind(this);
//  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
//    username: 'washington',
//    password: 'password987',
      //placeholder correct values for testing

  };
}

//handleUser(e) {
//  this.setState({ username: e.target.value });
//}
//
//handlePassword(e) {
//  this.setState({ password: e.target.value });
//}
//    handleSubmit(){
////        var data = new FormData();
//        const payload = {
//            username: this.state.username,
//            password: this.state.password
//        };
////        alert(payload.username + " and " + payload.password)
////        data.append(data, JSON.stringify(payload));
//
//        fetch('https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service', {
//            method: 'POST',
//            mode: 'no-cors',
//            body: JSON.stringify(payload),
//            headers: {
//                "Content-Type": "application/json"
//            }
//    
//        })
//            .then((responseJson) => {
//                console.log(responseJson) 
//        })
//            .catch((error) => {
//                console.error(error);
//        });
//    }



render() {
 return(
     <div>
     <h1>{data.Items[0].Title}</h1>
     <p>{data.Items[0].Description}</p>
     <h2>About the Speaker</h2>
     <h3>{data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName + " "}
     <i>
     {data.Items[0].Speakers[0].Company}
     </i></h3>

    </div>
 );
}

}

export default App;
