import React, { Component } from "react";
import Header from "./Header";
import VistaCombustiblesApi from "../views/combustiblesApi";
import Footer from "./Footer";
class combustiblesApi extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Combustibles API" />
        <VistaCombustiblesApi />
        <Footer />
      </div>
    );
  }
}
export default combustiblesApi;