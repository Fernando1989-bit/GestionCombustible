import React, { Component } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


import "./styles/App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header name="Menu principal" />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
