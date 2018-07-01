import React from 'react';

class DIY extends React.Component {
  constructor() {
    super();
  };

  render() {
    return(
      <form action="" onSubmit={this.goToFarm}>
        <h2>Please Enter your Farm's Name</h2>
        <label htmlFor="farmName">Farm Name</label>
        <input 
          type="text" 
          ref={this.farmInput}
          placeholder="My Aquaponics Farm"
          required/>
        <input 
          type="submit"
          className="btn ripple"
          value="Track Your Farm"/>
      </form>
    )
  }
}

export default DIY;