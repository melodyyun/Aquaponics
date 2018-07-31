import React from "react";
import AddProduceForm from "./AddProduceForm";

class PastFarms extends React.Component {
  render() {
    return (
      <div className="past-farms">
        <h2>Past Farm Cycles</h2>
        <AddProduceForm />
      </div>
    );
  }
}

export default PastFarms;
