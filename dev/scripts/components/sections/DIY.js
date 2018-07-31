//import Rebase from 're-base';
import React from "react";
import firebase from "firebase";
import firebaseui from "firebaseui";
import { firebaseConfig } from "../../firebase/firebase-config";
import FarmTracker from "./FarmTracker";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());
const auth = firebase.auth();

class DIY extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userId: "",
      userName: "",
      userImg: ""
    };
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  componentDidMount() {
    this.dbRef = firebase.database().ref("users/");

    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.dbRef.on("value", snapshot => {
          // console.log(snapshot.val());
        });
        this.setState({
          loggedIn: true,
          userName: user.displayName,
          userImg: user.photoURL,
          userId: user.uid
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => {
        console.log(user);
        const firebaseUid = user.user.uid;
        const firebaseName = user.user.displayName;
        const firebaseImg = user.user.photoURL;
        this.setState({
          userId: firebaseUid,
          userName: firebaseName,
          userImg: firebaseImg,
          loggedIn: true
        });
        console.log(this.state);
        const userInfo = {
          userName: firebaseName,
          userImg: firebaseImg
        };
        firebase
          .database()
          .ref(`users/accountInfo/${firebaseUid}`)
          .set(userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    firebase.auth().signOut();
    //this.dbRef.off('value');
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn === true ? (
          <div>
            <button onClick={this.logout}> Log Out </button>
            <h2>Welcome {this.state.userName}</h2>
            <FarmTracker userId={this.state.userId} />
          </div>
        ) : (
          <div>
            <button onClick={this.loginWithGoogle}> Login </button>
            <p>
              Nothing feels better than doing things yourself! Login to have
              access to your own aquaponics farm tracker. Keep organized and on
              top of all your crops and fish!
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default DIY;
