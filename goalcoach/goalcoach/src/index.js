import React from 'react';
import ReactDOM from 'react-dom';
import {firebaseApp} from './firebase';
import {createStore} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import reducer from './reducers'

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
  if (user){
    console.log('there is a user', user)
    browserHistory.push('/app');
  }
  else {
    console.log('no user')
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
      <Router path="/"
  history={browserHistory}>
  <Route path="/app" 
 component={App} />
   <Route path="/signin" 
 component={SignIn} />
   <Route path="/signup" 
 component={SignUp} />
  </Router>
    </Provider>, document.getElementById('root')
)