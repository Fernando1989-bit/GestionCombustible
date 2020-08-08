import React, { Component } from "react";
import Header from "./Header";
import VistaUsuariosApi from "../views/usuariosApi";
import Footer from "./Footer";
class usuariosApi extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Usuarios API" />
        <VistaUsuariosApi />
        <Footer />
      </div>
    );
  }
}
export default usuariosApi;