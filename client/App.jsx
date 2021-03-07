import React, { Component } from 'react';
// import Login from './main/Login.jsx';
import NavBar from './components/NavBar.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     // decks: [{'topic': 'math'; cards: {}}, {'topic': 'history'}, {'topic': 'health'}]
    //     decks: ['math', 'physics', 'python'],
    //   };
    // }
    // createDeck(event) {
    //   deckList.push()
    //   this.setState({
    //     deckList: deckList
    //   })
    // }
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
