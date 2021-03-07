import React, { Component } from 'react';
// import Login from './main/Login.jsx';
import NavBar from './components/NavBar.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Fascinate&display=swap"
          rel="stylesheet"
        />
        <NavBar />
      </div>
    );
  }
}

export default App;
