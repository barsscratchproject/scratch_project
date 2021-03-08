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
      userName: 'Stacy',
      decks: ['math', 'physics', 'python', 'polisci', 'redux', 'latin', 'anatomy', 'history', 'chemistry'],
      mathCards: [
        {question: 'What is the capital of New York State?', answer: 'Albany'},
        {question: 'What is the relationship between displacement, time interval and average velocity of an object travelling in uniform motion?', answer: 'When d gets larger and t is constant, the average velocity gets larger. When t gets larger, and d is constant, the average velocity gets smaller. When av gets larger, the slope position of a position time (dt) graph gets steeper.'},
        {question: '2 + 2', answer: '4'},
        {question: '2 + 4', answer: '6'},
        {question: '2 + 6', answer: '8'},
        {question: '2 + 8', answer: '10'},
        {question: '2 + 10', answer: '12'}
      ]
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
            <Dashboard user={this.state.userName} decks={this.state.decks} />
          </Route>

          <Route path="/deck">
            <Deck user={this.state.userName} decks={this.state.decks} cards={this.state.mathCards} />
          </Route>

          <Route path="/quiz">
            <Quiz user={this.state.userName} decks={this.state.decks} cards={this.state.mathCards} />
          </Route>

          <Route path="/login">
            <Login user={this.state.userName} decks={this.state.decks} cards={this.state.mathCards} />
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
