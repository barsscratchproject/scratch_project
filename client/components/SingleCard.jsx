import React, { Component } from 'react';

class SingleCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="editSingleCard">
        <div className="questionAnswer">
          <h1 className="singleQuestion">{this.props.question}</h1>
          <div className="divider"></div>
          <h1 className="singleAnswer">{this.props.answer}</h1>
        </div>
      </div>
    );
  }
}

export default SingleCard;
