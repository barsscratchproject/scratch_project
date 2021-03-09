import React, { Component } from 'react';

class SingleCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('delete function: ', this.props.deleteCard)
    return (
      <div className="editSingleCard">
        <div className="questionAnswer">
          <h1 className="singleQuestion">{this.props.question}</h1>
          <div className="divider"></div>
          <h1 className="singleAnswer">{this.props.answer}</h1>
        </div>
        <div className="deckEditButtons">
          <button className="deckEditButton">Edit</button>
          <button id="deleteCard" className="deckDeleteButton" onClick={(e) => {
            e.preventDefault();
            this.props.deleteCard(e);
          }}>Delete</button>
        </div>
      </div>
    );
  }
}

export default SingleCard;
