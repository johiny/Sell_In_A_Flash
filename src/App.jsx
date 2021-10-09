import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "layouts/Layout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
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
        </Layout>
        </Route>
      </Switch>
    </Router>
        
  );
}
export default App;
