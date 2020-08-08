import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./../App";
import usuarios from "./usuarios";
import vehiculos from "./vehiculos";
import usuariosApi from "./usuariosApi";
import usuariosApiAxios from "./usuariosApi";
import combustiblesApi from "./combustiblesApi";
import vehiculosApi from "./vehiculosApi";
import cargasApi from "./cargasApi";
import NotFound from "./notFound";

const Router=() => (
<BrowserRouter>
<Switch>
    <Route exact path="/" component={App}/>
    <Route  path="/usuarios" component={usuarios}/>
    <Route  path="/vehiculos" component={vehiculos}/>
    <Route  path="/usuariosApi" component={usuariosApi}/>
    <Route  path="/usuariosApiAxios" component={usuariosApiAxios}/>
    <Route  path="/combustiblesApi" component={combustiblesApi}/>
    <Route  path="/vehiculosApi" component={vehiculosApi}/>
    <Route  path="/cargasApi" component={cargasApi}/>
    <Route  component={NotFound}/>

    
</Switch>
</BrowserRouter>

);
export default Router;