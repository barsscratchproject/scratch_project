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
      username: '',
      decks: [],
    };

    this.userLogin = this.userLogin.bind(this);
  }

  /*
  createUser(event) {
    // need to add the input form somewhere and give it the same id as below
    const newUser = document.getElementById('newUser').value;

    fetch('/api/user', {
      method: 'POST',
      body: {},
    });
  }
  */

  // login and get all the decks for the logged-in user
  userLogin(event) {
    // get the username (inputted by user)
    const userInput = document.getElementById('login').value;

    // get the decks of the current logged-in user
    fetch(`/api/${userInput}/deck/all`)
      .then((data) => data.json())
      .then((data) => {
        const userDecks = [];
        for (let i = 0; i < data[0].decks.length; i += 1) {
          userDecks.push(data[0].decks[i].topic);
        }
        this.setState({ decks: userDecks, username: userInput });
      });
  }

  deleteDeck(event) {
    /*
    fetch(`/api/${this.state.username}/deck/delete`, {
      method: 'DELETE',
      // need to update "deck" in fetch request based on the ID in line below
      body: JSON.stringify({ topic: `${EDIT_THIS}` }),
    })
      .then((data) => data.json())
      .then((data) => {
        const updatedDecks = [];
        for (let i = 0; i < data[0].length; i += 1) {
          updatedDecks.push(data[0][i].topic);
        }

        this.setState({ decks: updatedDecks });
      });
      */
  }


  // addDeck(event) {
  //   // edit to add a form where the user can input data
  // }

  /* EDITDECK MIDDLEWARE HAS NOT BEEN COMPLETED
  editDeck(event) {
    // NEED TO UPDATE DECK ON LINE BELOW
    fetch(`/api/${this.state.username}/${EDIT_THIS}/edit`, {
      method: 'PATCH',
      body: { "topic": `${EDIT_THIS}` },
    })
      .then((data) => data.json())
      .then((updatedDeck) => {
        this.setState({ decks: updatedDeck });
      });
  }
  */


  

  render() {
    console.log('NAVBAR this.state.decks', this.state.decks);
    return (
      <body>
        <nav className="navBar">
          <Link
            className="navLinks"
            to="/dashboard"
            style={{ textDecoration: 'none' }}
          >
            <p>DASHBOARD</p>{' '}
          </Link>

          <Link
            className="navLinks"
            to="/deck"
            style={{ textDecoration: 'none' }}
          >
            <p>Deck</p>{' '}
          </Link>
          <Link
            className="navLinks"
            to="/quiz"
            style={{ textDecoration: 'none' }}
          >
            <p>Quiz Me!</p>{' '}
          </Link>
          <Link
            className="navLinks"
            to="/login"
            style={{ textDecoration: 'none' }}
          >
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
            <Login userLogin={this.userLogin} user={this.state.userName} decks={this.state.decks} cards={this.state.mathCards} />

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
