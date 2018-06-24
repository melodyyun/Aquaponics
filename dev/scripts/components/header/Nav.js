import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <nav>
        <ul>
          <li>
          <a href="https://www.desima.co/blog/2016/2/18/mason-jar-aquaponics" target="_blank">
              DIY
              </a>
          </li>
          <li>
            <a href="https://aquagrowfarms.ca/" target="_blank">
              Contribute
            </a>
          </li>
          <li>
            <a href="https://melodyyun.com/" target="_blank">
              About
              </a>
          </li>
        </ul>
      </nav>;
  }
}

export default Nav;