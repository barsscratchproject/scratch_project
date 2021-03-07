import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import DecksContainer from '../containers/DecksContainer.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckList: [],
    };
  }

  // createDeck(event) {
  //   deckList.push()
  //   this.setState({
  //     deckList: deckList
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Welcome pals from the Dashboard</h1>
        <DecksContainer />
      </div>
    );
  }
}

export default Dashboard;
