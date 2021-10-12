
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/stylegu.css';
import UserdataAD from './pages/UserdataAD';
import UserdataUS from './pages/UserdataUS';
import UserdataUSedit from './pages/UserdataUSedit';
import Layout2 from './layouts/Layout2';
import Layout from "layouts/Globallayout";
import IndexVentas from "pages/Maestro-Ventas/IndexVentas"
import Table from "pages/Maestro-Ventas/Table";
import DetallesVenta from "pages/Maestro-Ventas/DetallesVenta"
import Login from 'pages/Login';
import Index from 'pages/Index';
function App() {
  return (
    <Router>
      <Layout2>
                <Switch>
                    <Route path='/userdataad'>
                        <UserdataAD/>
                    </Route>
                    <Route path='/userdataus'>
                        <UserdataUS/>
                    </Route>
                    <Route path='/userdatausedit'>
                        <UserdataUSedit/>
                    </Route>
                </Switch>
      </Layout2>
      <Switch>
      <Route path='/index' exact>
            <Index />
      </Route>
        <Route path={["/Maestro-Ventas","/Maestro-Venta/DetallesVenta","/Maestro-Venta/Table","/Maestro-Venta/DetallesVenta", "Index"]} >
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

