import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import DecksContainer from '../containers/DecksContainer.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('DASHBOARD this.props.decks', this.props.decks);
    return (
      <div>
        <h1 className="welcomeUser">Welcome, {this.props.user}!</h1>
        <DecksContainer decks={this.props.decks} />
      </div>
    );
  }
}

export default Dashboard;
