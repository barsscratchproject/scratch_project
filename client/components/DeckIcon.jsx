import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Deck from '../main/Deck.jsx';

class DeckIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <h1>THIS IS AN ICON</h1>
      <div> 
        <Link
            to="/navbar/quiz"
            style={{ textDecoration: 'none' }}
          >
        {/* <a href='http://localhost:3000/navbar/quiz'> */}
      <div className="singleDeckIcon">
        {/* <div className="quizBtnContainer"> */}
        {/* <button className="singleDeckQuizMeBtn">Quiz me!</button> */}
        {/* </div> */}
        {/* <Link
            className="singleDeckEditBtn"
            to="/navbar/quiz"
            style={{ textDecoration: 'none' }}
          >
            <button 
            className="singleDeckEditBtn"
            topic={this.props.topic}
            // <Link to '/deck/' />
            onClick={(e) => {
              e.preventDefault();
              this.props.editDeck(e);
            }}
            > */}
              <h1 className="oneDeck">{this.props.topic}</h1>
            {/* </button> */}
            {/* </Link> */}
        <div className="editBtnContainer">
          {/* <Switch>
            <Route path="/deck" exact>
            <Route path="/deck">
              <Deck
                user={this.state.username}
                decks={this.state.decks}
                cards={this.state.mathCards}
              />
            </Route>
            </Route>
          </Switch> */}

          {/* the edit button below is fine */}
          {/* <button 
            className="singleDeckEditBtn"
            topic={this.props.topic}
            // <Link to '/deck/' />
            onClick={(e) => {
              e.preventDefault();
              this.props.editDeck(e);
            }}
            >Edit
          </button> */}
          <Link
            className="singleDeckEditBtn"
            to="/navbar/deck"
            style={{ textDecoration: 'none' }}
          >
            <button 
            className="singleDeckEditBtn"
            topic={this.props.topic}
            // <Link to '/deck/' />
            onClick={(e) => {
              e.preventDefault();
              this.props.editDeck(e);
            }}
            >Deck
          </button>
          </Link>


          <button
            className="singleDeckDeleteBtn"
            topic={this.props.topic}
            onClick={(e) => {
              e.preventDefault();
              this.props.deleteDeck(e);
              <Link to="/navbar/deck"></Link>
            }}
          >Delete
          </button>



          <Switch>
          <Route path="/navbar/deck">
            <Deck
              user={this.props.user} 
              decks={this.props.decks}
              cards={this.props.cards}
            />
          </Route>
        </Switch>

        </div>
        </div>
        {/* </a> */}
        </Link>
      </div>

    );
  }
}

export default DeckIcon;
