import React, { Component } from "react";
import Header from "./Header";
import VistaVehiculos from "../views/vehiculos";
import Footer from "./Footer";
class vehiculos extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Vehiculos" />
        <VistaVehiculos />
        <Footer />
      </div>
    );
  }
}
export default vehiculos;
