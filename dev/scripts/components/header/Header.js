import React from 'react';
import Particles from 'react-particles-js';

class Header extends React.Component {
  constructor() {
    super();
  }

  getRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }

  render() {
    return(
      <section>
        <div className="wrapper">
          <h1 className="titleText">Aquaponics</h1>
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                }
              },
              image: {
                src: "",
                width: 100,
                height: 100
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                } 
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 1
                }
              },
              size: {
                value: 5,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 6,
                direction: "top",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },

            }
          }}
          style={{
            width: '100%',
            height: '100%',
            // backgroundImage: `url(${logo})`
          }}
        />
      </section>
    )
  }
};

export default Header;