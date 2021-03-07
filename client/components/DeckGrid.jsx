import React, { Component } from 'react';
import DeckIcon from './DeckIcon.jsx';

// use the commented out stuff below export after figuring out state/props/shit

class DeckGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="displayGrid">
        Hi from DeckGrid
        <DeckIcon />
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
