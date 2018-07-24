import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {Router, Route, browserHistory} from 'react-router'


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