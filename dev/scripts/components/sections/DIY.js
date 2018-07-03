import React from 'react';
import firebase from 'firebase';
import {firebaseConfig} from "../../firebase/firebase-config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class DIY extends React.Component {
  constructor() {
    super();                                                                     this.state = {
      loggedIn: false,
      userId: "",
      userName: "",
      userImg: "",
    }
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  };

  //googleLogin

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => {
        const firebaseUid = user.user.uid;
        const firebaseName = user.user.displayName;
        const firebaseImg = user.user.photoURL;
        this.setState(
          {
            userId: firebaseUid,
            userName: firebaseName,
            userImg: firebaseImg,
            loggedIn: true
          },
          () => {
            const userInfo = {
              userName: firebaseName,
              userImg: firebaseImg
            };
            firebase
              .database()
              .ref(`users/accountInfo/${firebaseUid}`)
              .set(userInfo);
          }
        );
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