import React, {Component} from 'react';
import {firebaseApp} from '../firebase';

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut()
  }
render (){
  return (
    <div>App Component
      <button
      className="btn btn-danger"
      onClick={()=>this.signOut()}>
      Sign out.
      </button>
    </div>
  )
}
}

export default App;