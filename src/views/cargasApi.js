import React, { Component } from "react";
/* import axios from "axios";  */
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

class cargasApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idCarga: 0,
      cargas1: [],
      
    };
  }
  state = {};

  titulo = "CARGAS";

  frmFecha = React.createRef();
  frmTotal = React.createRef();
  frmVehiculo = React.createRef();
  frmCombustible = React.createRef();

  addCarga = (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/cargas/";

    const data = {
      fecha: this.frmFecha.value,
      total: this.frmTotal.value,
      combustible: this.frmCombustible,
      vehiculo: this.frmVehiculo,
      
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    this.frmFecha.value = "";
    this.frmTotal.value = "";
    this.frmVehiculo.value = "";
    this.frmCombustible.value = "";
    this.frmFecha.focus();
    this.frmTotal.focus();
    this.frmVehiculo.focus();
    this.frmCombustible.focus();

    this.loadCarga();
  };

  viewCarga = (id) => (event) => {
    event.preventDefault();

    this.frmFecha.value = "";
    this.frmTotal.value = "";
    this.frmVehiculo.value = "";
    this.frmCombustible.value = "";
    this.frmFecha.focus();
    this.frmTotal.focus();
    this.frmVehiculo.focus();
    this.frmCombustible.focus();
    this.frmVehiculo.value = this.state.cargas1[id];
  };

  editCarga = (id) => (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/cargas/" + id;

    const data = {
      fecha: this.frmFecha.value,
      total: this.frmTotal.value,
      combustible: this.frmCombustible,
      vehiculo: this.frmVehiculo,
      id
    };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    this.frmFecha.value = "";
    this.frmTotal.value = "";
    this.frmVehiculo.value = "";
    this.frmCombustible.value = "";
    this.frmFecha.focus();
    this.frmTotal.focus();
    this.frmVehiculo.focus();
    this.frmCombustible.focus();

    this.loadCarga();

    console.log(url);

    this.loadCarga();
  };

  deleteCarga = (id) => (event) => {
    event.preventDefault();
    console.log("Delete action");
    console.log(id);
    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/cargas/" + id;

    fetch(url, {
      method: "delete",
    }).then((response) =>
      response.json().then((json) => {
        return json;
      })
    );

    console.log(url);

    this.loadCarga();
  };

  loadCarga() {
    fetch("https://ing-narez-api5.us-south.cf.appdomain.cloud/api/cargas/")
      .then((response) => response.json())
      .then((json) => this.setState({ cargas1: json }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadCarga();
  }

  render() {
    return (
      <div className="App-content">
        <Container maxWidth="xs">
          <Link to="/">
            <Button
              variant="contained"
              color="default"
              size="small"
              startIcon={<HomeIcon />}
            >
              Regresar
            </Button>
          </Link>
        </Container>
        <form autoComplete="off" onSubmit={this.addCarga}>
          <TextField
            id="datetime-local"
            label="Fecha"
            type="date"
            defaultValue="2020-08-04"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={(e) => (this.frmFecha = e)}
          />
           <TextField
            label="Combustible"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmCombustible = e)}
          />
          <TextField
            label="Vehiculo"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmVehiculo = e)}
          />
          <TextField
            label="Total"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmTotal = e)}
          />
          <Fab color="primary" size="medium" onClick={this.addCarga}>
            <AddIcon />
          </Fab>
        </form>

        <List
          component="nav"
          subheader={
            <ListSubheader component="div">{this.titulo}</ListSubheader>
          }
        >
          {this.state.cargas1.map((carga, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewCarga(index)}>
                <PersonIcon />
              </ListItemIcon>

              <ListItemText inset primary={carga.fecha} />
              <ListItemText inset primary={carga.idVehiculo} />
              <ListItemIcon onClick={this.editCarga(carga.id)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteCarga(carga.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default cargasApi;
