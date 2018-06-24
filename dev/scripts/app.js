import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom';
import firebase from 'firebase';
import { firebaseConfig } from './firebase/firebase-config';
//import custom components
import Header from './components/header/Header';
import About from './components/sections/About';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <About />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


