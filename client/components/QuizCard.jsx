import React, { Component } from 'react';

class QuizCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('QUIZCARD QUESTION', this.props.question);
    console.log('QUIZCARD ANSWER', this.props.answer);
    return (
      <div className="flashcardContainer">
        <div classname="singleFlashcard">
          <h3>HERE'S ONE</h3>
          <h2 className="flashcardQuestion">{this.props.question}</h2>
          <h2 className="flashcardAnswer">{this.props.answer}</h2>
        </div>
      </div>
    );
  }
}

export default QuizCard;
