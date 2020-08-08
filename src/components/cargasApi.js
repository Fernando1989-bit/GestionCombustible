import React, { Component } from "react";
import Header from "./Header";
import VistaCargasApi from "../views/cargasApi";
import Footer from "./Footer";
class cargasApi extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Cargas API" />
        <VistaCargasApi />
        <Footer />
      </div>
    );
  }
}
export default cargasApi;