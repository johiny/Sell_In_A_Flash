import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import IndexVentas from "pages/IndexVentas"
import TableIndex from "pages/TableIndex";
import DetallesVenta from "pages/DetallesVenta"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/IndexVentas">
        <IndexVentas/>
        </Route>
        <Route path="/TableIndex">
          <TableIndex/>
        </Route>
        <Route path="/DetallesVenta">
          <DetallesVenta/>
        </Route>
        </Switch>
    </Router>
  );
}
export default App;
