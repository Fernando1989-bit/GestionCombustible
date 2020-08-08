import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import Autocomplete from "@material-ui/lab/Autocomplete";

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

class vehiculoApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idVehiculo: 0,
      vehiculos1: []
      
    };
  }
  state = {};

  titulo = "VEHICULOS";

  frmModelo = React.createRef();
  frmPlaca = React.createRef();
  frmChofer = React.createRef();

  addVehiculo = (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/vehiculos/";

    const data = {
      modelo: this.frmModelo.value,
      placa: this.frmPlaca.value,
      usuario:this.frmChofer.value
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

      this.frmModelo.value = "";
      this.frmPlaca.value = ""; 
      this.frmChofer.value = "";
      this.frmModelo.focus();
      this.frmPlaca.focus();
      this.frmChofer.focus();
    

    this.loadVehiculo();
  };

  viewVehiculo = (id) => (event) => {
    event.preventDefault();

    this.frmModelo.value = "";
    this.frmPlaca.value = ""; 
    this.frmChofer.value = "";
    this.frmModelo.focus();
    this.frmPlaca.focus();
    this.frmChofer.focus();
    this.frmModelo.value = this.state.vehiculos1[id];
  };

  editVehiculo = (id) => (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/vehiculos/" + id;

    const data = {
      modelo: this.frmModelo.value,
      placa: this.frmPlaca.value,
      usuario: this.frmChofer.value
    };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

   
      this.frmModelo.value = "";
      this.frmPlaca.value = ""; 
      this.frmChofer.value = "";
      this.frmModelo.focus();
      this.frmPlaca.focus();
      this.frmChofer.focus();

    this.loadVehiculo();

   

    this.loadVehiculo();
  };

  deleteVehiculo = (id) => (event) => {
    event.preventDefault();
    console.log("Delete action");
    console.log(id);
    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/vehiculos/" + id;

    fetch(url, {
      method: "delete",
    }).then((response) =>
      response.json().then((json) => {
        return json;
      })
    );

    console.log(url);

    this.loadVehiculo();
  };

  loadVehiculo() {
    fetch("https://ing-narez-api5.us-south.cf.appdomain.cloud/api/vehiculos/")
      .then((response) => response.json())
      .then((json) => this.setState({ vehiculos1: json }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadVehiculo();
    
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
        <form autoComplete="off" onSubmit={this.addVehiculo}>
          <TextField
            label="Modelo"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmModelo = e)}
          />
          <TextField
            label="Placa"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmPlaca = e)}
          />
       <TextField
            label="Chofer"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmChofer = e)}
          />

          <Fab color="primary" size="medium" onClick={this.addVehiculo}>
            <AddIcon />
          </Fab>
        </form>

        <List
          component="nav"
          subheader={
            <ListSubheader component="div">{this.titulo}</ListSubheader>
          }
        >
          {this.state.vehiculos1.map((vehiculo, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewVehiculo(index)}>
                <PersonIcon />
              </ListItemIcon>

              <ListItemText inset primary={vehiculo.modelo} />
              <ListItemText inset primary={vehiculo.placa} />
              <ListItemText inset primary={vehiculo.chofer} />
              <ListItemIcon onClick={this.editVehiculo(vehiculo.id)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteVehiculo(vehiculo.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default vehiculoApi;
