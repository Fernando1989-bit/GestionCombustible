import React, { Component } from "react";
import Header from "./Header";
import VistaUsuariosApiAxios from "../views/usuariosApiAxios";
import Footer from "./Footer";
class usuariosApiAxios extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Usuarios API Axios" />
        <VistaUsuariosApiAxios />
        <Footer />
      </div>
    );
  }
}
export default usuariosApiAxios;
