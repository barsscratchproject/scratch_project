import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import DecksContainer from '../containers/DecksContainer.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('EMERGENCY: ', this.props.addCard)
    console.log('DASHBOARD this.props', this.props);
    console.log('dashboard addDeck: ', this.props.addDeck)
    return (
      <div>
        <h1 className="welcomeUser">Welcome, {this.props.user}!</h1>
        <DecksContainer
          user={this.props.user} 
          decks={this.props.decks}
          editDeck={this.props.editDeck}
          deleteDeck={this.props.deleteDeck}
          cards={this.props.cards} 
          addDeck={this.props.addDeck}
          addCard={this.props.addCard}
        />
      </div>
    );
  }
}

export default Dashboard;
