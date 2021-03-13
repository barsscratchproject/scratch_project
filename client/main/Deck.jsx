import React, { Component } from 'react';
import CardsContainer from '../containers/CardsContainer.jsx';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('EMERGENCY: ', this.props.addCard)
    // console.log('DECK CONTAINER user', this.props.user);
    // console.log('DECK this.props.decks', this.props.decks);
    // console.log('DECK this.props.cards', this.props.cards);
    return (
      <div>
        {/* <h1>{this.props.user}'s {this.props.deck} deck:</h1> */}
        <CardsContainer 
          user={this.props.user} 
          deck={this.props.decks[0]} 
          cards={this.props.cards} 
          addCard={this.props.addCard} 
          deleteCard={this.props.deleteCard}
        />
      </div>
    );
  }
}

export default Deck;
