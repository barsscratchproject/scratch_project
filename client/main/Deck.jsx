import React, { Component } from 'react';
import CardsContainer from '../containers/CardsContainer.jsx';

class Deck extends Component {
  render() {
    return (
      <div>
        <CardsContainer />
        <h1>hey deck</h1>
        <button>Add a card</button>
        <h3>This is a card</h3>
        <button>Edit this card</button>
        <button>Delete this card</button>
      </div>
    );
  }
}

export default Deck;
