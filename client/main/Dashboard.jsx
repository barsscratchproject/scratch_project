import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import DecksContainer from '../containers/DecksContainer.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>hey dashboard!</h1>
        <button>Create a deck</button>
        <h2>deck 1</h2>
        <button>Edit this deck</button>
        <button>Quiz me!</button>
        <h2>deck 2</h2>
        <button>Edit this deck</button>
        <button>Quiz me!</button>
        <h2>deck 3</h2>
        <button>Edit this deck</button>
        <button>Quiz me!</button>
      </div>
      // <div>
      //   <div className="navBar">
      //     <button className="backToDash">Back to dashboard</button>
      //     <button className="backToDeck">Back to this deck</button>
      //     <button className="logout">Logout</button>
      //   </div>
      //   <div className="container">
      //     <div className="outerBox">
      //       <h1 id="header">Testing123 Dashboard</h1>
      //       <NavBar />
      //       <DecksContainer />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Dashboard;
