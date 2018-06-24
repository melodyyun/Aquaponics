import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router-dom";
import firebase from "firebase";
import { firebaseConfig } from "./firebase/firebase-config";
//import custom components


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Index extends React.Component {
  render() {
    return (
      <main>

      </main>
    );
  }
}

export default Index;

