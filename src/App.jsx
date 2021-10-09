import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "layouts/layout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
import Login from 'pages/Login';
import Index from 'pages/Index'
import 'estilos/estilos.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/Maestro-Ventas","/Maestro-Venta/DetallesVenta","/Maestro-Venta/Table","/Maestro-Venta/DetallesVenta"]} >
        <Layout>
          <Switch>
            <Route path="/Maestro-Ventas/DetallesVenta">
              <DetallesVenta/>
            </Route>
            <Route path="/Maestro-Ventas/Table">
            <Table/>
            </Route>
            <Route path="/Maestro-Ventas/DetallesVenta">
              <DetallesVenta/>
            </Route>
            <Route path ="/Maestro-Ventas">
              <IndexVentas/>
            </Route>
          </Switch>
          <Route path='/index'>
            <Index />
            </Route>
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