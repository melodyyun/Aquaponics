import React from 'react';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <section className="about">
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
          <div className="about__text">
            <p className="about__text--info">
              Aquaponics combines aquaculture (growing fish) and hydroponics
              (growing without soil). It is an innovative way of farming
              that uses the symbiotic relationship between fish and plants.
              Plants consume nutrients from the fish waste and in return,
              they clean the water for the fish. Aquaponics is a sustainable
              form of agriculture that produces organic pesticide-free
              crops. It does not degrade the soil or waste water like
              traditional farming methods and aquaponic farms can be built
              in the city, cutting down on transportation costs/pollution.
              Together we can feed the world!
            </p>
          </div>
          <div className="display-flex center-flex">
            <button className="btn ripple" >Start Journey</button>
          </div>
        </div>
      </section>;
  }
};

export default About;