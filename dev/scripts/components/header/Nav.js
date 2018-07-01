import React from 'react';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      zero: 0,
    }
    this.navBtn = React.createRef();
    this.goToPage = this.goToPage.bind(this);
    this.handleNavScroll = this.handleNavScroll.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.refs.navBtn);
  // }
  //handle page change
  goToPage() {
    this.props.history.push('/DIY');
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
            <a 
            onClick={this.goToPage}
            data="DIY" 
            ref={this.navBtn}>
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