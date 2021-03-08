import React from 'react';

const Login = (props) => (
  <form
    id="inputForm"
    onSubmit={(e) => {
      e.preventDefault();
      props.userLogin(e);
    }}
  >
    <br />
    <label>Username:</label>
    <br />
    <br />
    <input id="login" type="text" />
    <button type="submit">Login</button>
  </form>
);

export default Login;
