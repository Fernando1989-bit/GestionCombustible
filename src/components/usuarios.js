import React, { Component } from "react";
import Header from "./Header";
import VistaUsuarios from "../views/usuarios";
import Footer from "./Footer";
class usuarios extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header name="Usuarios" />
        <VistaUsuarios />
        <Footer />
      </div>
    );
  }
}
export default usuarios;
