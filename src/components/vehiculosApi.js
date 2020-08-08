import React, { Component } from "react";
import Header from "./Header";
import VistaVehiculosApi from "../views/vehiculosApi";
import Footer from "./Footer";
class vehiculosApi extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Vehiculos API" />
        <VistaVehiculosApi />
        <Footer />
      </div>
    );
  }
}
export default vehiculosApi;
