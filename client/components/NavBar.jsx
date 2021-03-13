import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Dashboard from '../main/Dashboard.jsx';
import Login from '../main/Login.jsx';
import Deck from '../main/Deck.jsx';
import Quiz from '../main/Quiz.jsx';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'BARS',
      decks: [],
      allDecksCards: [],
      mathCards: [],
      currentTopic: "",
      currentCards: [],
    };

    // this.userLogin = this.userLogin.bind(this);
    this.addDeck = this.addDeck.bind(this);
    this.editDeck = this.editDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
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

  // hard-coded the user
  componentDidMount() {
    // get the decks of the current logged-in user
    fetch(`/api/${this.state.username}/deck/all`)
    // fetch(`/api`)
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
        // console.log('getting the id? :', data[0].decks[0].cards[cards.length-1])

        this.setState({ decks: userDecks, allDecksCards: userInventory, mathCards: tempCards});
      });
  }


  addCard(e) {
    // get the questions and answers from user input
    const newQuestion = document.getElementById('newQuestion').value;
    const newAnswer = document.getElementById('newAnswer').value;
    const newId = (this.state.mathCards.length) + 1;

    fetch(`/api/${this.state.username}/createCard`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // "geography" is hardcoded, should be dynamic
      body: JSON.stringify({ topic: "Geography", question: newQuestion, answer: newAnswer, id: newId}),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data after adding card: ', data);
        console.log('data decks after adding card: ', data.decks);

        const updatedDecks = [...this.state.mathCards];
        updatedDecks.unshift({id: newId, question: newQuestion, answer: newAnswer})
        console.log('decks after delete: ', updatedDecks);
        this.setState({ mathCards: updatedDecks });
      });
  }

  deleteCard(event) {
    const selectedCard = event
    console.log('selectedCard: ', selectedCard)
    console.log('hi')
  }

  deleteDeck(event) {
    const selectedTopic = event.target.attributes.topic.nodeValue;
    console.log('decks before delete: ', this.state.decks);

    fetch(`/api/${this.state.username}/deck/delete`, {
      method: 'DELETE',
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


  addDeck(event) {
    const userInput = document.getElementById('createDeck').value;
    // console.log('selected: ', userInput)
    // edit to add a form where the user can input data
    console.log('ADD DECK BUTTON CLICKED');
    // on submit

    // const selectedTopic = event.target.attributes.topic.nodeValue;
    console.log('decks before added: ', this.state.decks);

    fetch(`/api/${this.state.username}/createDeck`, {
      method: 'PATCH',
      // need to update "deck" in fetch request based on the ID in line below
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: userInput, cards: {} }),
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
        <BrowserRouter>
        <nav className="navBar">
          <Link
            className="navLinks"
            to="/navbar/quiz"
            style={{ textDecoration: 'none' }}
          >
            <p>Quiz Me!</p>{' '}
          </Link>
          <Link
            className="navLinks"
            to="/navbar/dashboard"
            style={{ textDecoration: 'none' }}
          >
            <p>DASHBOARD</p>{' '}
          </Link>

          <Link
            className="navLinks"
            to="/navbar/deck"
            style={{ textDecoration: 'none' }}
          >
            <p>Deck</p>{' '}
          </Link>
          {/* <Link
            className="navLinks"
            to="/login"
            style={{ textDecoration: 'none' }}
          >
            <p>LOGOUT</p>{' '}
          </Link> */}
        </nav>
        <Switch>
          {/* need to render something for the home route? */}

          <Route 
          path="/navbar/dashboard" 
          component={
            () => <Dashboard
            user={this.state.username}
            decks={this.state.decks}
            editDeck={this.editDeck}
            deleteDeck={this.deleteDeck}
            cards={this.state.mathCards} 
            addDeck={this.addDeck}
            addCard={this.addCard}
          />
          }>
          </Route>

          <Route 
          path="/navbar/deck" 
          component={
              () =>  <Deck
              user={this.state.username}
              decks={this.state.decks}
              cards={this.state.mathCards}
              addCard={this.addCard}
              deleteCard={this.deleteCard}
            />
            }>
          </Route>

          <Route 
          path="/navbar/quiz" 
          component={
            () => <Quiz
            user={this.state.username}
            decks={this.state.decks}
            cards={this.state.mathCards}
            topic={this.state.currentTopic}
          />
          }>
          </Route>

          {/* <Route path="/login">
            <Login
              userLogin={this.userLogin}
              user={this.state.username}
              decks={this.state.decks}
              cards={this.state.mathCards}
            />
          </Route> */}
          <Route path="/navbar" exact>
            <Dashboard 
              user={this.state.username} 
              decks={this.state.decks} 
              editDeck={this.editDeck}
              deleteDeck={this.deleteDeck}
              cards={this.state.mathCards} 
              addDeck={this.addDeck}
              addCard={this.addCard}

            />
          </Route>
        </Switch>

        </BrowserRouter>
      </body>
    );
  }
}



export default NavBar;