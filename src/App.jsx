import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserdataAD from 'pages/InterfazGestionUsuarios/UserdataAD';
import UserdataUS from 'pages/InterfazGestionUsuarios/UserdataUS';
import UserdataUSedit from 'pages/InterfazGestionUsuarios/UserdataUSedit';
import Layout2 from 'layouts/Layout2';
import Layout from "layouts/Globallayout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
import Login from 'pages/Login';
import Index from 'pages/Index';


function App() {
  return (
 <Router>   
  <Switch>
    <Route path ={["/InterfazGestionUsuarios/Administrador", "/InterfazGestionUsuarios/Usuarios","/InterfazGestionUsuarios/Usuarios/editar"]}>
      <Layout2>
      <Switch>
        <Route path='/InterfazGestionUsuarios/Administrador'>
          <UserdataAD/>
        </Route>
        <Route path='/InterfazGestionUsuarios/Usuarios'>
          <UserdataUS/>
        </Route>
        <Route path='/InterfazGestionUsuarios/UsuariosEditar'>
          <UserdataUSedit/>
        </Route>
      </Switch>
      </Layout2>
      </Route>
        <Route path={["/Maestro-Ventas","/Maestro-Venta/DetallesVenta","/Maestro-Venta/Table", "/Index"]} >
          <Layout>
          <Switch>
            <Route path="/Maestro-Ventas/DetallesVenta">
              <DetallesVenta/>
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
      <Route path='/'>
            <Login />
          </Route>
      </Switch>
    </Router>
  );
}  
        
export default App;

