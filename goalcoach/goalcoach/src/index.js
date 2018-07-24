import React from 'react';
import ReactDOM from 'react-dom';
import {firebaseApp} from './firebase';
import {Router, Route, browserHistory} from 'react-router'
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

firebaseApp.auth().onAuthStateChanged( user => {
  if (user){
    console.log('there is a user', user)
  }
  else {
    console.log('no user')
  }
})

ReactDOM.render(
  <Router path="/"
  history={browserHistory}>
  <Route path="/app" 
 component={App} />
   <Route path="/signin" 
 component={SignIn} />
   <Route path="/signup" 
 component={SignUp} />


  </Router>, document.getElementById('root')
)