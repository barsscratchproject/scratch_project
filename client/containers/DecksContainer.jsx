import React, { Component } from 'react';
import DeckGrid from '../components/DeckGrid.jsx';
import CreateDeck from '../components/CreateDeck.jsx';

class DecksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DECKS CONTAINER this.props.decks', this.props.decks);
    return (
      <div className="dashboardBox">
        <h1>Hi from DecksContainer</h1>
        <button>Create New Deck</button>
        <DeckGrid decks={this.props.decks} />
      </div>
    );
  }
}

export default DecksContainer;
