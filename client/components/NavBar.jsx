import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from '../main/Dashboard.jsx';
import Login from '../main/Login.jsx';
import Deck from '../main/Deck.jsx';
import Quiz from '../main/Quiz.jsx';

const NavBar = () => (
  <div class="container">
    <nav>
      <Link to="/">
        <button>Login</button>{' '}
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>{' '}
      </Link>
      <Link to="/deck">
        <button>Deck</button>{' '}
      </Link>
      <Link to="/quiz">
        <button>Quiz Me!</button>{' '}
      </Link>
    </nav>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/deck" component={Deck} />
      <Route path="/quiz" component={Quiz} />
    </Switch>
  </div>
);

export default NavBar;
