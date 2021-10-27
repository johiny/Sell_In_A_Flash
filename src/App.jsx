import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserdataAD from 'pages/InterfazGestionUsuarios/UserdataAD';
import UserdataUS from 'pages/InterfazGestionUsuarios/UserdataUS';
import UserdataUSedit from 'pages/InterfazGestionUsuarios/UserdataUSedit';
import Layout from "layouts/Globallayout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
import Login from 'pages/auth/Login';
import Index from 'pages/Index';
import NuevaVenta from "pages/Maestro-Ventas/NuevaVenta"
import Registrar from "pages/auth/Registrar";
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
  return (
<Auth0Provider
    domain="dev-0skfin92.us.auth0.com"
    clientId="NOstxx6zUuNbSfMxHCYO6SrYZ2c8NXZ8"
    redirectUri={window.location.origin}
  >
  </Auth0Provider>,
 <Router>   
  <Switch>
        <Route path={["/InterfazGestionUsuarios/Administrador", "/InterfazGestionUsuarios/Usuarios","/Maestro-Ventas","/Maestro-Venta/DetallesVenta","/Maestro-Ventas/NuevaVenta","/Maestro-Venta/Table", "/Index"]} >
          <Layout>
          <Switch>
            <Route path='/InterfazGestionUsuarios/Usuarios'>
              <UserdataUS/>
            </Route>
            <Route path='/InterfazGestionUsuarios/Administrador'>
              <UserdataAD/>
            </Route>
            <Route path="/Maestro-Ventas/DetallesVenta">
              <DetallesVenta/>
            </Route>
            <Route path ="/Maestro-Ventas/NuevaVenta">
            <NuevaVenta/>
            </Route>
            <Route path="/Maestro-Ventas/Table">
            <Table/>
            </Route>
            <Route path ="/Maestro-Ventas">
              <IndexVentas/>
            </Route>
            <Route path='/Index'>
              <Index />
            </Route>
          </Switch>
          </Layout>
          </Route>
          <Route path='/Registro'>
            <Registrar />
          </Route>    
      <Route path='/'>
            <Login />
          </Route>
      </Switch>
    </Router>
  );
}  
        
export default App;

