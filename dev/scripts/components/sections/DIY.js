import React from 'react';
import firebase from 'firebase';
import firebaseui  from 'firebaseui';
import {firebaseConfig} from "../../firebase/firebase-config";
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
      userImg: "",
    }
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  };

  componentDidMount() {
    this.dbRef = firebase.database().ref('users/');

    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.dbRef.on('value', (snapshot) => {
          // console.log(snapshot.val());
        })
        this.setState({
          loggedIn: true,
          userName: user.displayName,
          userImg: user.photoURL,
          userId: user.uid,
        })
      } else {
        this.setState({
          loggedIn: false
        })
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
        <div>
          <button onClick={this.logout}> Log Out </button>
          <h2>Welcome {this.state.userName}</h2>
          <FarmTracker userId={this.state.userId}/>
        </div>
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