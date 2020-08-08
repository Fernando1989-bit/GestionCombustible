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

class combustiblesApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      idCombustible: 0,
      combustibles1: [],
    };
  }
  state = {};

  titulo = "COMBUSTIBLES";

  frmDescripcion = React.createRef();
  frmPrecio = React.createRef();

  addCombustible = (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/combustibles/";

    const data = { descripcion: this.frmDescripcion.value, precio: this.frmPrecio.value };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    this.frmDescripcion.value = "";
    this.frmPrecio.value = "";
    this.frmDescripcion.focus();
    this.frmPrecio.focus();

    this.loadCombustible();
  };

  viewCombustible = (id) => (event) => {
    event.preventDefault();

    this.frmDescripcion.value = "";
    this.frmPrecio.value = "";
    this.frmDescripcion.focus();
    this.frmPrecio.focus();
    this.frmDescripcion.value = this.state.combustibles1[id];
  };

  editCombustible = (id) => (event) => {
    event.preventDefault();

    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/combustibles/"+id;

    const data = { descripcion: this.frmDescripcion.value, precio: this.frmPrecio.value, id };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

      this.frmDescripcion.value = "";
      this.frmPrecio.value = "";
      this.frmDescripcion.focus();
      this.frmPrecio.focus();

    this.loadCombustible();
    

    console.log(url);

    this.loadCombustible();
  };

  deleteCombustible = (id) => (event) => {
    event.preventDefault();
    console.log("Delete action");
    console.log(id)
    const url = "https://ing-narez-api5.us-south.cf.appdomain.cloud/api/combustibles/" + id;

    fetch(url, {
      method: "delete",
    }).then((response) =>
      response.json().then((json) => {
        return json;
      })
    );

    console.log(url);

    this.loadCombustible();
  };

  loadCombustible() {
    fetch("https://ing-narez-api5.us-south.cf.appdomain.cloud/api/combustibles/")
      .then((response) => response.json())
      .then((json) => this.setState({ combustibles1: json }))
      .catch((error) => console.log(error));
  }

   componentDidMount() {
    this.loadCombustible();
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
        <form autoComplete="off" onSubmit={this.addCombustible}>
          <TextField
            label="Descripcion"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmDescripcion = e)}
          />
          <TextField
            label="Precio"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmPrecio = e)}
          />
          <Fab color="primary" size="medium" onClick={this.addCombustible} >
           
            <AddIcon />
          </Fab>
          
        </form>
       

        <List
          component="nav"
          subheader={
            <ListSubheader component="div">{this.titulo}</ListSubheader>
          }
        >
          {this.state.combustibles1.map((combustible, index) => (
            <ListItem button key={index}>
              <ListItemIcon onClick={this.viewCombustible(index)}>
                <PersonIcon />
              </ListItemIcon>
              
              <ListItemText inset primary={combustible.descripcion} />
              <ListItemText inset primary={combustible.precio} />
              <ListItemIcon onClick={this.editCombustible(combustible.id)}>
                <EditIcon />
              </ListItemIcon>
              <ListItemIcon onClick={this.deleteCombustible(combustible.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default combustiblesApi;
