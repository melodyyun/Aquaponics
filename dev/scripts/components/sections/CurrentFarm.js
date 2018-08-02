import React from "react";
import AddProduceForm from "./AddProduceForm";

class CurrentFarm extends React.Component {
  constructor() {
    super();
  }
  //if move to past farm is check
  //send alert
  //alert return true
  //rewrite all info from current farm to past farm
  //delete info from current farm.
  render() {
    return (
      <div className="past-farms">
        <h2>Current Farm Cycle</h2>
        <form>
          <label name="past-farm">Move to past farm</label>
          <input type="checkbox" name="past-farm"/>
        </form>
        <AddProduceForm />
      </div>
    );
  }
}

export default CurrentFarm;
