import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from '../main/Dashboard.jsx';
import Login from '../main/Login.jsx';
import Deck from '../main/Deck.jsx';
import Quiz from '../main/Quiz.jsx';
import ReactDOM from "react-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'barsTwo',
      decks: [],
      allDecksCards: [],
      // username: 'Stacy',
      // decks: ['math', 'physics', 'python', 'polisci', 'redux', 'latin', 'anatomy', 'history', 'chemistry'],
      // mathCards: [
      //   {question: 'What is the capital of New York State?', answer: 'Albany'},
      //   {question: 'What is the relationship between displacement, time interval and average velocity of an object travelling in uniform motion?', answer: 'When d gets larger and t is constant, the average velocity gets larger. When t gets larger, and d is constant, the average velocity gets smaller. When av gets larger, the slope position of a position time (dt) graph gets steeper.'},
      //   {question: '2 + 2', answer: '4'},
      //   {question: '2 + 4', answer: '6'},
      //   {question: '2 + 6', answer: '8'},
      //   {question: '2 + 8', answer: '10'},
      //   {question: '2 + 10', answer: '12'}
      // ]
      mathCards: [],
      currentTopic: "",
      currentCards: [],
    };

    // this.userLogin = this.userLogin.bind(this);
    this.addDeck = this.addDeck.bind(this);
    this.editDeck = this.editDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  };
  // }

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
  /*
  userLogin(event) {
    // get the username (inputted by user)
    const userInput = document.getElementById('login').value;
    // get the decks of the current logged-in user
    fetch(`/api/${userInput}/deck/all`)
      .then((data) => data.json())
      .then((data) => {
        console.log('fetched data: ', data);
        const userDecks = [];
        const userInventory = [];
        for (let i = 0; i < data[0].decks.length; i += 1) {
          userDecks.push(data[0].decks[i].topic);
          userInventory.push(data[0].decks[i]);
        }
        console.log('all the decks ', userDecks);
        console.log('all the decks and cards ', userInventory);
        this.setState({ decks: userDecks, username: userInput, allDecksCards: userInventory});
      });
  }
  */

  // hard-coded user
  componentDidMount() {
    // get the decks of the current logged-in user
    fetch(`/api/barsTwo/deck/all`)
      .then((data) => data.json())
      .then((data) => {
        console.log('fetched data: ', data);
        const userDecks = [];
        const userInventory = [];
        for (let i = 0; i < data[0].decks.length; i += 1) {
          userDecks.push(data[0].decks[i].topic);
          userInventory.push(data[0].decks[i]);
        }
        console.log('all the decks ', userDecks);
        console.log('all the decks and cards ', userInventory);
        // not updating username state since it's hardcoded


        // hardcoding the art deck for ryan to work on stuff
        const tempCards = data[0].decks[0].cards
        console.log('testing the cards: ', tempCards)

        this.setState({ decks: userDecks, allDecksCards: userInventory, mathCards: tempCards});
      });
  }

  deleteDeck(event) {
    const selectedTopic = event.target.attributes.topic.nodeValue;
    console.log('decks before delete: ', this.state.decks);

    fetch(`/api/${this.state.username}/deck/delete`, {
      method: 'DELETE',
      // need to update "deck" in fetch request based on the ID in line below
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: selectedTopic }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data after delete: ', data);
        console.log('data decks after delete: ', data.decks);
        const updatedDecks = [];
        for (let i = 0; i < data.decks.length; i += 1) {
            updatedDecks.push(data.decks[i].topic);
          
        }
        console.log('decks after delete: ', updatedDecks);
        this.setState({ decks: updatedDecks });
      });
  }

  closeForm(event) {
    console.log('close this')
    // document.getElementById("popupForm").style.display = "none";
  }

  openForm(event) {
    console.log('open this')
    // document.getElementById("popupForm").style.display = "block";
  }

  addDeck(event) {
    // edit to add a form where the user can input data
    console.log('ADD DECK BUTTON CLICKED');

    // const selectedTopic = event.target.attributes.topic.nodeValue;
    console.log('decks before added: ', this.state.decks);

    fetch(`/api/${this.state.username}/createDeck`, {
      method: 'PATCH',
      // need to update "deck" in fetch request based on the ID in line below
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: "Hey", cards: {} }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data after add!!!!: ', data);
        console.log('data decks after add: ', data.decks);
        const updatedDecks = [];
        for (let i = 0; i < data.decks.length; i += 1) {
            updatedDecks.push(data.decks[i].topic);
        }
        console.log('decks after add: ', updatedDecks);
        this.setState({ decks: updatedDecks });
      });

  }

  // EDITDECK MIDDLEWARE HAS NOT BEEN COMPLETED
  editDeck(event) {
    console.log('EDIT DECK BUTTON CLICKED');
    // window.location.href=`/api/barsTwo/deck`
    // fetch(`/api/barsTwo/deck`)
    //   .then(res => res.json())
    //   .catch(err => console.log('EDIT DECK ERROR:', err));
    // NEED TO UPDATE DECK ON LINE BELOW
    // fetch(`/api/${this.state.username}/${EDIT_THIS}/edit`, {
    //   method: 'PATCH',
    //   body: { "topic": `${EDIT_THIS}` },
    // })
    //   .then((data) => data.json())
    //   .then((updatedDeck) => {
    //     this.setState({ decks: updatedDeck });
    //   });
  }
  

  render() {
    // console.log('NAVBAR this.state.decks', this.state.decks);
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
          <Route path="/" exact>
            <Dashboard 
              user={this.state.username} 
              decks={this.state.decks} 
              editDeck={this.editDeck}
              deleteDeck={this.deleteDeck}
              cards={this.state.mathCards} 
              addDeck={this.addDeck}
              openForm={this.openForm}
              closeForm={this.closeForm}
            />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard
              user={this.state.username}
              decks={this.state.decks}
              editDeck={this.editDeck}
              deleteDeck={this.deleteDeck}
              cards={this.state.mathCards} 
              addDeck={this.addDeck}
              openForm={this.openForm}
              closeForm={this.closeForm}
            />
          </Route>

          <Route path="/deck">
            <Deck
              user={this.state.username}
              decks={this.state.decks}
              cards={this.state.mathCards}
            />
          </Route>

          <Route path="/quiz">
            <Quiz
              user={this.state.username}
              decks={this.state.decks}
              cards={this.state.mathCards}
              topic={this.state.currentTopic}
            />
          </Route>

          <Route path="/login">
            <Login
              userLogin={this.userLogin}
              user={this.state.username}
              decks={this.state.decks}
              cards={this.state.mathCards}
            />
          </Route>
        </Switch>
      </body>
    );
  }
}



export default NavBar;
