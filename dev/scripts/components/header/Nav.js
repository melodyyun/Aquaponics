import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      zero: 0,
    }
    this.handleNavScroll = this.handleNavScroll.bind(this);
  }

  //hide nav scroll on scroll down
  navScroll() {
    window.addEventListener('scroll', this.handleNavScroll);
  }

  handleNavScroll(e) {
    this.refs.nav.classList.toggle('hide', window.pageYOffset > this.state.zero);
    this.setState({
      zero: window.pageYOffset
    })
  }

  render() {
    return <nav ref="nav">
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
              About Me
              </a>
          </li>
        </ul>
      </nav>;
  }
}

export default Nav;