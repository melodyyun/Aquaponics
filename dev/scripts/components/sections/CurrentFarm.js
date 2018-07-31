import React from "react";
import AddProduceForm from "./AddProduceForm";

class CurrentFarm extends React.Component {
  render() {
    return (
      <div className="past-farms">
        <h2>Current Farm Cycle</h2>
        <AddProduceForm />
      </div>
    );
  }
}

export default CurrentFarm;
