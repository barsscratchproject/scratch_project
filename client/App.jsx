import React, { Component } from 'react';
import Dashboard from './containers/Dashboard.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{<Dashboard />}</div>;
  }
}

export default App;
