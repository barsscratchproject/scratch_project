import React, { Component } from 'react';

// import DecksList from '..components/DecksList.jsx';

class DecksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="innerbox">
        <h1>Your Decks from the DecksContainer</h1>
        <button>Create New Deck</button>
        {/* 
        <DecksList /> */}
      </div>
    );
  }
}

export default DecksContainer;
