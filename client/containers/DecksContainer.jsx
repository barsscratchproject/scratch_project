import React, { Component } from 'react';
import DeckGrid from '../components/DeckGrid.jsx';
import CreateDeck from '../components/CreateDeck.jsx';

class DecksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="innerbox">
        <h1>Hi from DecksContainer</h1>
        <button>Create New Deck</button>
        <DeckGrid />
        <CreateDeck />
      </div>
    );
  }
}

export default DecksContainer;
