import React from 'react';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about">
        <div className="wrapper">
          <h2 className="subHeading">What is Aquaponics?</h2>
          <div className="about-grid">
            <div>
              <img id="fish" src="./public/assets/fish.svg" alt="fish" />
              <h2>aquaculture</h2>
            </div>
            <div id="plus">
              <h2>+</h2>
            </div>
            <div>
              <img id="pot-plant" src="./public/assets/pot-plant.svg" alt="plant" />
              <h2>hydroponics</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default About;