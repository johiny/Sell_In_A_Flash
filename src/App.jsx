import React from 'react';
import Principal from './Pages/Principal';
import './Styles/App.css';
import './Styles/App2.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditPage from './Pages/Editar';
import ViewRegister from './Pages/Ver';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/RegisterEdit'>
            <EditPage/>
          </Route>
          <Route path='/ViewRegister'>
            <ViewRegister/>
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
