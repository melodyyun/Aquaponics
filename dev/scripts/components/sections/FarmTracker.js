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
      order: {}
    };
  }

  componentDidMount() {
    console.log(this.props.userId);
    //this.ref = firebaseConfig.syncState(`aquaFarm/${this.props.userId}`/farm);
  }

  render() {
    return (
      <div className="farm-tracker">
        <CurrentFarm />
        <PastFarms />
      </div>
    );
  }
}

export default FarmTracker;
