import React from "react";
import firebaseConfig from "../../firebase/firebase-config";
import PastFarms from "./PastFarms";
import CurrentFarm from "./CurrentFarm";

class FarmTracker extends React.Component {
  constructor() {
    super();
    this.state = {
      plants: {},
      fish: {},
      order: {},
      farmName: ""
    };
    this.farmNameInput = React.createRef();
    this.saveFarmName = this.saveFarmName.bind(this);
  }

  componentDidMount() {
    console.log(this.props.userId);
    //on load pull check the database and set the farmName if there is one

    //this.ref = firebaseConfig.syncState(
    //  `aquaponics-farms/${this.props.userId}/farm`
    //);
  }

  saveFarmName(e) {
    e.preventDefault();
    this.setState({ farmName: this.farmNameInput.current.value });
    //save this name into the database
  }

  getFarmName() {
    return (
      <form action="" onSubmit={this.saveFarmName}>
        <h2>Please Enter your Farm's Name</h2>
        <label htmlFor="farmName">Farm Name: </label>
        <input
          type="text"
          ref={this.farmNameInput}
          placeholder="My Aquaponics Farm"
          required
        />
        <input type="submit" className="btn ripple" value="Submit" />
      </form>
    );
  }

  render() {
    return (
      <div className="farm-tracker">
        {this.state.farmName === "" ? (
          this.getFarmName()
        ) : (
          <h1>{this.state.farmName}</h1>
        )}
        <CurrentFarm />
        <PastFarms />
      </div>
    );
  }
}

export default FarmTracker;
