import React, { Component } from 'react';
import { render } from 'react-dom';
import QuizCard from '../components/QuizCard.jsx';

class Quiz extends Component {
  render() {
    // console.log('QUIZ QUESTION', this.props.cards);
    // console.log('QUIZ ANSWER', this.props.cards.answer);
    const flashcards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      flashcards.push(<QuizCard 
        key={`Card${i}`} 
        user={this.props.username} 
        decks={this.props.decks} 
        question={this.props.cards[i].question} 
        answer={this.props.cards[i].answer}
        />)
    }
    return (
      <div className="quizContainer">
        {/* <QuizCard user={this.state.username} decks={this.state.decks} cards={this.state.mathCards} /> */}
        {flashcards}
        {/* <h1>hey quiz</h1> */}
        {/* <h2>QUESTION/ANSWER</h2> */}
        <button>Show me the answer</button>
        <button>Next card</button>
      </div>
    );
  }
}

export default Quiz;
