import React, { Component } from 'react';

class DeckIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <h1>THIS IS AN ICON</h1>
      <div className="singleDeckIcon">
        {/* <div className="quizBtnContainer"> */}
        {/* <button className="singleDeckQuizMeBtn">Quiz me!</button> */}
        {/* </div> */}
        <h1 className="oneDeck">{this.props.topic}</h1>
        <div className="editBtnContainer">
          <button className="singleDeckEditBtn">Edit</button>
          <button
            className="singleDeckDeleteBtn"
            topic={this.props.topic}
            onClick={(e) => {
              e.preventDefault();
              this.props.deleteDeck(e);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default DeckIcon;
