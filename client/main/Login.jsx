import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>hey login!!! testing ugly ass fonts</h1>
        <h3>Username:</h3>
        <input name="username" type="text" />
        <h3>Password:</h3>
        <input name="password" type="text" />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
