import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import { firebaseConfig } from './firebase/firebase-config';
//import custom components
// import Router from './components/router/Router'


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return <Router />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


