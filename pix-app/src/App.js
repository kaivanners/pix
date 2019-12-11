import React from 'react';
import Signup from './components/Signup.js';
import Login from './components/Login.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Sign-up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
