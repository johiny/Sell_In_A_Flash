import './styles/App.css';
import UserdataAD from './pages/UserdataAD';
import UserdataUS from './pages/UserdataUS';
import UserdataUSedit from './pages/UserdataUSedit';
import Layout from './layouts/Layout';
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
            <Layout>
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
            </Layout>
        </Router>

        <footer>

        </footer>

    </div>
  );
}

export default App;
