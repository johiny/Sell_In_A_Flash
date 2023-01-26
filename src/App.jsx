import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserdataAD from 'pages/InterfazGestionUsuarios/UserdataAD';
import UserdataUS from 'pages/InterfazGestionUsuarios/UserdataUS';
import GlobalLayout from "layouts/Globallayout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
/* import Login from 'pages/auth/Login';
import Registrar from "pages/auth/Registrar"; */
import Index from 'pages/Index';
import NuevaVenta from "pages/Maestro-Ventas/NuevaVenta"
import Principal from 'pages/Interfaz-Productos/Principal';
import { Auth0Provider } from "@auth0/auth0-react";
import EditPage from "pages/Interfaz-Productos/Editar";
import ViewRegister from "pages/Interfaz-Productos/Ver";
import 'styles/App2.css';
import "styles/View.css";
import "styles/estilos.css";



function App() {
  
  return (
  <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri= {window.location.origin}
    >
    <Router>   
      <Switch>
        <Route path={["usuarios/admin", "usuarios/usuarios","/Maestro-Ventas","/Maestro-Venta/DetallesVenta","/Maestro-Ventas/NuevaVenta","/Maestro-Venta/Table","/Interfaz-Productos/Principal", "/Interfaz-Productos/Ver", "/Interfaz-Productos/Ver", "/index", "/" ]} >
          < GlobalLayout>
            <Switch>
              <Route path='/usuarios/usuarios'>
                <UserdataUS/>
              </Route>
              <Route path='/usuarios/admin'>              
                <UserdataAD/>                
              </Route>
              <Route path="/Interfaz-Productos/Editar">
              <EditPage/>
            </Route>
            <Route path="/Interfaz-Productos/Ver">
              <ViewRegister/>
            </Route>
            <Route path="/Interfaz-Productos/Principal">
              <Principal/>
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
              <Route path='/index'>
                <Index />
              </Route>            
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </GlobalLayout> 
        </Route>

        {/* <Route path='/Registro'>
          <Registrar />
        </Route>  */}   
      </Switch>
    </Router>
    </Auth0Provider>
  );
}  
        
export default App;

