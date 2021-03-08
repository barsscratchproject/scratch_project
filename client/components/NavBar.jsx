import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from '../main/Dashboard.jsx';
import Login from '../main/Login.jsx';
import Deck from '../main/Deck.jsx';
import Quiz from '../main/Quiz.jsx';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // decks: [{'topic': 'math'; cards: {}}, {'topic': 'history'}, {'topic': 'health'}]
      decks: ['math', 'physics', 'python', 'polisci', 'redux', 'latin', 'anatomy', 'history', 'chemistry']
    };
  }
  render() {
    console.log('NAVBAR this.state.decks', this.state.decks);
    return (
      <body>
        <nav className="navBar">
          <Link className="navLinks" to="/dashboard" style={{ textDecoration: 'none' }}>
            <p>DASHBOARD</p>{' '}
          </Link>

          <Link className="navLinks" to="/deck" style={{ textDecoration: 'none' }}>
            <p>Deck</p>{' '}
          </Link>
          <Link className="navLinks" to="/quiz" style={{ textDecoration: 'none' }}>
            <p>Quiz Me!</p>{' '}
          </Link>
          <Link className="navLinks" to="/login" style={{ textDecoration: 'none' }}>
            <p>LOGOUT</p>{' '}
          </Link>
        </nav>
        <Switch>
          {/* need to render something for the home route? */}
          <Route path="/dashboard" exact>
            <Dashboard decks={this.state.decks} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </body>
    );
  }
}

export default NavBar;

// const NavBar = () => (
//   <body>
//     <nav className="navBar">
//       <Link to="/" style={{ textDecoration: 'none' }}>
//         <p className="navLinks">HOME/LOGO</p>{' '}
//       </Link>
//       <Link to="/login" style={{ textDecoration: 'none' }}>
//         <p className="navLinks">Login</p>{' '}
//       </Link>
//       <Link to="/dashboard" style={{ textDecoration: 'none' }}>
//         <p className="navLinks">Dashboard</p>{' '}
//       </Link>
//       <Link to="/deck" style={{ textDecoration: 'none' }}>
//         <p className="navLinks">Deck</p>{' '}
//       </Link>
//       <Link to="/quiz" style={{ textDecoration: 'none' }}>
//         <p className="navLinks">Quiz Me!</p>{' '}
//       </Link>
//     </nav>
//     <Switch>
//       {/* need to render something for the home route? */}
//       <Route path="/" exact />
//       <Route path="/login" component={Login} exact />
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/deck" component={Deck} />
//       <Route path="/quiz" component={Quiz} />
//     </Switch>
//   </body>
// );
