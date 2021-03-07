import React, { Component } from 'react';
import DeckIcon from './DeckIcon.jsx';
import CreateDeck from './CreateDeck';

// use the commented out stuff below export after figuring out state/props/shit

class DeckGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('DECK GRID this.props.decks', this.props.decks);
    const decks = [];
    for (let i = 0; i < this.props.decks.length; i++) {
      // const currDeck = this.props.decks[i];
      decks.push(<DeckIcon key={`Deck${i}`} topic={this.props.decks[i]} />);
    }
    return (
      <div className="deckGrid">
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
