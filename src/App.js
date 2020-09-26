import React from 'react';
import "./App.css";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact={true}>
              <Dashboard> </Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login> </Login>
            </Route>

            <Route path="*">
              <Error> </Error>
            </Route>

          </Switch>
        </Router>
      </AuthWrapper>
      <footer>
        <p>&copy;DINSOMNANG 2020</p>
      </footer>
    </div>
  );

}

export default App;
