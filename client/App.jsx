import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './main/Dashboard.jsx';
import Login from './main/Login.jsx';
import Deck from './main/Deck.jsx';
import Quiz from './main/Quiz.jsx';
// import NavBar from './main/NavBar.jsx';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // |-- App
  // |-- Dashboard
  //    |-- NavBar
  //    |-- DecksContainer
  //        |-- DecksList
  //           |-- DeckListItem
  // |-- Deck landing page
  render() {
    return (

      // this works:
      <div class="container">
        <nav>
          <Link to="/"><button>Login</button> </Link>
          <Link to="/dashboard"><button>Dashboard</button> </Link>
          <Link to="/deck"><button>Deck</button> </Link>
          <Link to="/quiz"><button>Quiz Me!</button> </Link>
        </nav>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/deck" component={Deck} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>

      // <main>
      //   <Switch>
      //     <Route path="/" component={Login} exact />
      //     <Route path="/dashboard" component={Dashboard} />
      //     <Route path="/deck" component={Deck} />
      //     <Route path="/quizme" component={Quiz} />
      //   </Switch>
      // </main>
    )
  }
}

export default App;


/*
<Router>
<div className="container">
<ul>
 <li><Link to="/">Home</Link></li>
 <li><Link to="/dashboard">About</Link></li>
</ul>
<hr/>
<Route exact path="/" component={Login} /> 
<Route path="/dashboard" component={Dashboard} />   
</div>
</Router>
*/