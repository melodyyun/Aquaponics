import React from "react";

import Header from "../header/Header";
import About from "../sections/About";


class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <About />
      </main>
    );
  }
}

export default Home;
