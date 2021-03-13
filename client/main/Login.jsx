import React, { Component } from 'react';

function Login (props) {
  const oauthURL = "http://localhost:3000/auth/google"
  return (
    <div className='oauth'>
      <a href={`${oauthURL}`}>
        <img
          src='http://pngimg.com/uploads/google/google_PNG19635.png'
          alt="Google's G"
        ></img>
      </a>
    </div>
  )
};

export default Login;
