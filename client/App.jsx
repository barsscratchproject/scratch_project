import React, { Component } from 'react';
import { Switch, Route, Router, Link, useLocation} from 'react-router-dom';
// import Login from './main/Login.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './main/login.jsx';
import './styles.css';



class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='Router'>
        <Switch>
          <Route
            exact
            path="/"
            component={
              ()=> <Login />
            }>
          </Route>
          <Route
            exact
            path="/navbar"
            component={
              () => <NavBar />
            }>
          </Route>
        </Switch>
      </div>
    );
  }
}


// <div>
// <NavBar />
// </div>

export default App;