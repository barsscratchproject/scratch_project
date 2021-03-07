import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from '../components/NavBar.jsx';

class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>hey quiz</h1>
        <h2>QUESTION/ANSWER</h2>
        <button>Show me the answer</button>
        <button>Next card</button>
      </div>
    );
  }
}

export default Quiz;
