import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import DecksContainer from '../containers/DecksContainer.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Testing123 Dashboard</h1>
          <NavBar />
          <DecksContainer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
