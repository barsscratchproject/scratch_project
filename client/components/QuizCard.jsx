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
          <div className="flashcardContainerFront" className="card-container">
          <div className="card">
            <h2 className="flashcardQuestion" className="front">{this.props.question}</h2>
          {/* <div className="back"> */}
            <h2 className="flashcardAnswer" className="back">
       {this.props.answer}
              </h2>
          </div>
          {/* </div> */}
          </div>
          {/* <div className="flashcardContainerBack" className="flashcardAnswer" className="back"> */}
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