import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import Civilizaciones from './components/Civilizaciones';
import Civilizacion from './components/Civilizacion';

function App() {
  return (
    <Router>
    <div className="container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          inicio
        </Link>

        <Link to="/nosotros" className="btn btn-dark">
          Nosotros
        </Link>

        <Link to="/civilizaciones" className="btn btn-dark">
          Civilizaciones
        </Link>

        <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
          Contacto
        </NavLink> 

      </div>
      <hr />

      <Switch>

      <Route path="/civilizacion/:id">
          <Civilizacion />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/civilizaciones">
          <Civilizaciones />
        </Route>

        <Route path="/">
          <Inicio />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
