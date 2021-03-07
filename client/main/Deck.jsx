import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from '../components/NavBar.jsx';

class Deck extends Component {
  render() {
    return (
      <div>
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
