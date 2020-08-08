import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Button";
import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/Button";
import data from "../assets/data/usuarios.json";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

var listaUsuarios = [
  "FERNANDO NAREZ",
  "OVIDIO GUZMAN",
  "FREDY MERCURY",
  "GALILEA MONTIJO",
  "DONALD TRUMP",
  "EVANIVALDO MASCORRO",
  "DAGOBERTO DEL REAL",
  "MACARENA POMPOM",
  "CARMEN LADELA CADENITA",
  "THANOS RODRIGUEZ",
];

class usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioss: listaUsuarios,
      edit: false,
      idUsuario: 0,
      usuarios1: [],
    };
  }
  state = {};

  frmNombre = React.createRef();
  frmEdad = React.createRef();

  addUsuario = (event) => {
    event.preventDefault();
    var nuevoUsuario = this.state;
    if (!this.state.edit) {
      nuevoUsuario.usuarioss.push(this.frmNombre.value);
      nuevoUsuario.usuarioss.sort();
    } else {
      nuevoUsuario.usuarioss[this.state.id] = this.frmNombre.value;
      nuevoUsuario.usuarioss.edit = false;
      nuevoUsuario.usuarioss.id = 0;
    }
    this.frmNombre.value = "";
    this.setState({ nuevoUsuario });
  };

  viewUsuarios = (id) => (event) => {
    event.preventDefault();

    this.frmEdad.value = "";
    this.frmNombre.value = "";
    this.frmEdad.focus();
    this.frmNombre.focus();
    this.frmNombre.value = this.state.usuarioss[id];
  };

  deleteUsuario = (id) => (event) => {
    event.preventDefault();
    console.log("Borrar usuario");
    console.log(id);

    this.frmNombre.value = "";
    this.frmNombre.focus();

    delete this.state.usuarioss[id];

    var nuevoUsuario = this.state.usuarioss;
    this.setState({ usuarioss: nuevoUsuario});
  };

  editUsuario = (id) => (event) => {
    event.preventDefault();
    
    
    this.frmNombre.focus();
    this.frmNombre.value = this.state.usuarioss[id];

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);
  };

  loadUsuario() {
    fetch("http://localhost:3000/api/usuarios")
      .then((response) => response.json())
      .then((json) => this.setState({ usuarioss: json }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadUsuario();
  }
  render() {
    return (
      <div>
        <div className="App-content">
          <Container>
            <Link to="/">
              <Button variant="contained" color="primary">
                Regresar
              </Button>
            </Link>
          </Container>
          <form autoComplete="off" onSubmit={this.addUsuario}>
            <TextField
              label="Nombre"
              type="text"
              margin="normal"
              variant="outlined"
              inputRef={(e) => (this.frmNombre = e)}
            />
            {/* <TextField
              label="Edad"
              type="text"
              margin="normal"
              variant="outlined"
              inputRef={(e) => (this.frmEdad = e)}
            /> */}
            <Fab color="primary" size="medium" onClick={this.addUsuario}>
              <AddIcon />
            </Fab>
          </form>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Usuarios</ListSubheader>}
          >
            {this.state.usuarioss.map((usuario, index) => (
              <ListItem button key={index}>
                <ListItemIcon onClick={this.viewUsuarios(index)}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={usuario} onClick={this.editUsuario(index)} />
                

                <ListItemIcon onClick={this.editUsuario(index)}>
                  <Edit />
                </ListItemIcon>
                <ListItemIcon onClick={this.deleteUsuario(index)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}
export default usuarios;
