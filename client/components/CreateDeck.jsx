import React, { Component } from 'react';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="createDeckCard">
        <div className="createDeckText">
          <button className="addDeckButton">+{'\n'}ADD A NEW DECK</button>
        </div>
      </div>
    );
  }
}

export default CreateDeck;
