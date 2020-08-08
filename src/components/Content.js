import React, { Component } from "react";
import {Container, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
class Content extends Component {
  state = {};
  
  render() {
    
    return (
      <div className="App-content">
       <Container maxWidth="xs">
                {/* <Link to="/usuarios">
                    <Button variant="contained" color="default">
                        Usuarios
                    </Button>
                </Link>
                &nbsp;&nbsp; */}
                {/* <Link to="/vehiculos">
                    <Button variant="contained" color="default">
                        Vehiculos
                    </Button>
                </Link>
                &nbsp;&nbsp; */}
                <Link to="/usuariosApi">
                    <Button variant="contained" color="default">
                        Usuarios
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/combustiblesApi">
                    <Button variant="contained" color="default">
                        Combustibles
                    </Button>
                </Link>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <Link to="/vehiculosApi">
                    <Button variant="contained" color="default">
                        Vehiculos
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/cargasApi">
                    <Button variant="contained" color="default">
                        Cargas
                    </Button>
                </Link>
                &nbsp;&nbsp;
                {/* <Link to="/usuariosApiAxios">
                    <Button variant="contained" color="default">
                        Usuarios API Axios
                    </Button>
                </Link> */}
                
            </Container>
      </div>
    );
  }
}
export default Content;
