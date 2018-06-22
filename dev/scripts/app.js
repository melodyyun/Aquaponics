import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { firebaseConfig } from './firebase/firebase-config';
//import custom components
import Header from './components/header/Header';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


