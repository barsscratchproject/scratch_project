import React, { Component } from 'react';
// import Login from './main/Login.jsx';
import NavBar from './components/NavBar.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
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