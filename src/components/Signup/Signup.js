// SignUp.js

import React, { useState } from 'react';
import {Cookies} from 'react-cookie';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''
const COMFY_URL = process.env.REACT_APP_COMFY_URL || ''

const postHeaders = new Headers();
postHeaders.append("Content-Type", "application/json");

const SignUp = () => {
  const cookies = new Cookies();
  // State variables to store user input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectToComfy = () => {
    // Replace '/new-url' with the desired URL
    window.open(COMFY_URL,"_self");
  };

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();

    const body = JSON.stringify({'password':password, 'username':username, 'email':email})

    // Perform sign-up logic here (e.g., send data to a server)
    const myRequest = new Request(`${BACKEND_URL}/signupUser`, {
      method: "POST",
      headers: postHeaders,
      body: body
    });

    fetch(myRequest)
    .then(response => {
      if (response.ok) {
        response.json()
          .then(responseJson => {
            cookies.set('comfyUserToken', responseJson.token, { path: '/' });
            redirectToComfy()
          });
        }
     });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
