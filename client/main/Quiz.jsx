import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCardFlip from 'react-card-flip';

import QuizCard from '../components/QuizCard.jsx';

class Quiz extends Component {

  
  render() {
    // console.log('QUIZ QUESTION', this.props.cards);
    // console.log('QUIZ ANSWER', this.props.cards.answer);
    const flashcards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      flashcards.unshift(<QuizCard 
        key={`Card${i}`} 
        user={this.props.username} 
        decks={this.props.decks} 
        question={this.props.cards[i].question} 
        answer={this.props.cards[i].answer}
        />)
    }
    return (
      <div className="quizContainer">
        {flashcards}
        {/* <button>Show me the answer</button> */}
        {/* <button>Next card</button> */}
      </div>
    );
  }
}

export default Quiz;
