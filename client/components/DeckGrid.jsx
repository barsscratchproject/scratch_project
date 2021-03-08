import React, { Component } from 'react';
import DeckIcon from './DeckIcon.jsx';
import CreateDeck from './CreateDeck';


// use the commented out stuff below export after figuring out state/props/shit

class DeckGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('deck grid addDeck: ', this.props.addDeck)
    // console.log('DECK GRID this.props.decks', this.props.decks);
    const decks = [];
    for (let i = 0; i < this.props.decks.length; i++) {
      // const currDeck = this.props.decks[i];
      decks.unshift(
        <DeckIcon
          user={this.props.user} 
          key={`Deck${i}`}
          topic={this.props.decks[i]}
          editDeck={this.props.editDeck}
          deleteDeck={this.props.deleteDeck}
          cards={this.props.cards} 
          addDeck={this.props.addDeck}
        />,
      );
    }
    return (
      <div className="deckGrid">
        <CreateDeck addDeck={this.props.addDeck} />
        {decks}
      </div>
    );
  }
}

export default DeckGrid;

// const DeckGrid = (props) => {
//   const decks = [];
//   for (let i = 0; i < props.deckList.length; i++) {
//     decks.push(
//       <DeckIcon key={`Deck${i}`} deckName={props.deckList[i].deckName} />,
//     );
//   }
//   return <div className="displayGrid">Hi from DeckGrid</div>;
// };





