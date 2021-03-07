import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>hey login</h1>
        <h3>Username:</h3>
        <input name="username" type="text"/>
        <h3>Password:</h3>
        <input name="password" type="text"/>
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
