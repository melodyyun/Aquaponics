import React from 'react';
import Particles from 'react-particles-js';

//custom imports
import Nav from './Nav';

class Header extends React.Component {
  constructor() {
    super();
  }

  getRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }

  render() {
    return(
      <header>
      <Nav />
        <div className="wrapper">
          <h1 className="titleText">Aquaponics</h1>
          <h2>aquaculture + hydroponics</h2>
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
                value: "#ffffff",
                value: ["#bff", "#8ef", "#bef"]
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
                random: true,
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
                value: 7,
                random: true,
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
              array: []
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'grab'
                },
                onclick: {
                  enable: false,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 100,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 200,
                  size: 80,
                  duration: 0.4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              },
              mouse: {}
            },
            retina_detect: false,
            fn: {
              interact: {},
              modes: {},
              vendors: {}
            },
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            zIndex: -1
          }}
        />
      </header>
    )
  }
};

export default Header;