import './styles/stylegu.css';
import UserdataAD from './pages/UserdataAD';
import UserdataUS from './pages/UserdataUS';
import UserdataUSedit from './pages/UserdataUSedit';
import Layout2 from './layouts/Layout2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
        </Router>

        <footer>

        </footer>

    </div>
  );
}

export default App;
