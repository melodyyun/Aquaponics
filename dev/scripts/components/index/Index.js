import React from "react";

//firebase
import firebase from "firebase";
import { firebaseConfig } from "../../firebase/firebase-config";
//import custom components

import Header from '../header/Header';
import About from '../sections/About';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Index extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <About />
      </main>
    );
  }
}

export default Index;

