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
        <DeckGrid 
          user={this.props.user} 
          decks={this.props.decks}
          editDeck={this.props.editDeck}
          deleteDeck={this.props.deleteDeck} 
          cards={this.props.cards} 
          addDeck={this.props.addDeck}
        />
      </div>
    );
  }
}

export default DecksContainer;
