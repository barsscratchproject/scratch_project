import React, { Component } from 'react';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    //   <div className="createDeckCard">

    //     <div className="createDeckText">
    //       <button className="addDeckButton" onClick={(e) => {
    //   e.preventDefault();
    //   this.props.addDeck(e);
    // }}>+{'\n'}ADD A NEW DECK</button>
    //     </div>
    //     <br />
    //     <br />

        <form
            className="createDeckCard"
            id="inputForm"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.addDeck(e);
            }}>
          <br />
          <div className="createContent">
            <label htmlFor="addNewDeck" className="createDeckText">ADD A NEW DECK</label>
            <br />
            <br />
            <input id="createDeck" type="text" />
            <button className="createDeckButton" type="submit">Create Deck</button>
          </div>
        </form>



    );
  }
}

export default CreateDeck;








  

