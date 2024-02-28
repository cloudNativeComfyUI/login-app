// Import necessary React components
import React, { useState } from 'react';
import {Cookies} from 'react-cookie';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''
const COMFY_URL = process.env.REACT_APP_COMFY_URL || ''

const postHeaders = new Headers();
postHeaders.append("Content-Type", "application/json");

// Functional component for the login page
const Login = () => {
  const cookies = new Cookies();
  // State to manage the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const redirectToComfy = () => {
    // Replace '/new-url' with the desired URL
    window.open(COMFY_URL,"_self");
  };

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    const body = JSON.stringify({'password':password, 'username':username})

    // Perform sign-up logic here (e.g., send data to a server)
    const myRequest = new Request(`${BACKEND_URL}/verifyPassword`, {
      method: "POST",
      headers: postHeaders,
      body: body
    });

    fetch(myRequest)
    .then(response => {
      if (response.ok) {
        response.json().then(responseJson => {
            cookies.set('comfyUserToken', responseJson.token, { path: '/' });
            redirectToComfy()
          });
        }
        else{
          alert('Invalid username or password')
        }
      }); 
  };

  return (
    <div>
        <form onSubmit={handleLogin}>
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
            Password:  
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
    </div>
  );
};

// Export the component for use in other parts of the application
export default Login;
