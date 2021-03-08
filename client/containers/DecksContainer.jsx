import React, { Component } from 'react';
import DeckGrid from '../components/DeckGrid.jsx';
import CreateDeck from '../components/CreateDeck.jsx';

class DecksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('DECKS CONTAINER this.props.decks', this.props.decks);
    // console.log(' from the delete deckscont ', this.props.deleteDeck);
    return (
      <div className="dashboardBox">
        {/* <h1>Hi from DecksContainer</h1> */}
        <DeckGrid decks={this.props.decks} deleteDeck={this.props.deleteDeck} />
      </div>
    );
  }
}

export default DecksContainer;
