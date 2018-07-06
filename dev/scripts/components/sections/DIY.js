import React from 'react';
import firebase from 'firebase';
import firebaseui  from 'firebaseui';
import {firebaseConfig} from "../../firebase/firebase-config";

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
      userImg: "",
    }
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    //this.login = this.login.bind(this);
  };

  //googleLogin

  // login() {
  //   const uiConfig = {
  //     callbacks: {
  //       signInSuccessWithAuthResult: function (authResult, redirectUrl) {
  //         // User successfully signed in.
  //         // Return type determines whether we continue the redirect automatically
  //         // or whether we leave that to developer to handle.
  //         return true;
  //       },
  //       uiShown: function () {
  //         // The widget is rendered.
  //         // Hide the loader.
  //         document.getElementById('loader').style.display = 'none';
  //       }
  //     },
  //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //     signInFlow: 'popup',
  //     signInOptions: [
  //       // Leave the lines as is for the providers you want to offer your users.
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     ],
  //   };
  // }


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
        this.setState(
          {
            userId: firebaseUid,
            userName: firebaseName,
            userImg: firebaseImg,
            loggedIn: true
          })
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
  };

  logout() {
    firebase.auth().signOut();
    //this.dbRef.off('value');
  };


  render() {
    return(
      <React.Fragment>
      {this.state.loggedIn === true ? (
        <button onClick={this.logout}> Log Out </button>
      ): (
        <button onClick={this.loginWithGoogle}> Login </button>
      )}
      </React.Fragment>
    )
  }
}

export default DIY;


{/* <form action="" onSubmit={this.goToFarm}>
  <h2>Please Enter your Farm's Name</h2>
  <label htmlFor="farmName">Farm Name</label>
  <input
    type="text"
    ref={this.farmInput}
    placeholder="My Aquaponics Farm"
    required />
  <input
    type="submit"
    className="btn ripple"
    value="Track Your Farm" />
</form> */}