import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBIgudvFU2diH9_-NdqiTX03rthNMdyfSw",
    authDomain: "goalcoach-2f3da.firebaseapp.com",
    databaseURL: "https://goalcoach-2f3da.firebaseio.com",
    projectId: "goalcoach-2f3da",
    storageBucket: "gs://goalcoach-2f3da.appspot.com",
    messagingSenderId: "818274323735"
  };

  export const firebaseApp = firebase.initializeApp(config);

  export const goalRef = firebase.database().ref('goals');
  
 
