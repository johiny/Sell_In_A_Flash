import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './estilos/estilos.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
