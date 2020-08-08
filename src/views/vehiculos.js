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
import data from "../assets/data/vehiculos.json";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

var listaVehiculos = ["DODGE", 
  "HONDA", 
  "STRATUS", 
  "TOYOTA",
  "YAMAHA",
  "NISSAN",
  "BUGATTI",
  "FERRARI",
  "VOYAGUER",
  "DATSUN"];

class vehiculos extends Component {
    
    state = {};
    render() {
      return (
        <div>
          
          <div className="App-content">
            <Container>
                <Link to="/">
                <Button variant="contained" color="primary" >
                Regresar
              </Button>
                </Link>
             
            </Container>
            <List
            component="nav"
            subheader={<ListSubheader component="div">Vehiculos</ListSubheader>}
          >
            {data.vehiculos.map((vehiculo, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={vehiculo.marca} />
                <ListItemText inset primary={vehiculo.modelo} />
                <ListItemText inset primary={vehiculo.noPlaca} />
                {/* <IconButton size="small">
                  <Edit />
                </IconButton> */}
              </ListItem>
            ))}
          </List>
          </div>
        </div>
      );
    }
  }
  export default vehiculos;
  