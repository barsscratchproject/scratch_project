import React, { Component } from 'react';

class QuizCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('QUIZCARD currentTopic', this.props.currentTopic);
    console.log('QUIZCARD QUESTION', this.props.question);
    console.log('QUIZCARD ANSWER', this.props.answer);
    return (
      <div className="allFlashcards">
        <h1>{this.props.currentTopic}</h1>
        <div className="singleTopic">
          <div className="flashcardContainerFront">
            <h2 className="flashcardQuestion">{this.props.question}</h2>
          </div>

          <div className="flashcardContainerBack">
            <h2 className="flashcardAnswer">{this.props.answer}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard;


          {/* <div classname="singleFlashcard">
            <h3>HERE'S ONE</h3>
            <h2 className="flashcardQuestion">{this.props.question}</h2>
            <h2 className="flashcardAnswer">{this.props.answer}</h2>
          </div> */}