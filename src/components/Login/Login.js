// Import necessary React components
import React, { useState } from 'react';
import {Cookies} from 'react-cookie';

import {Button, TextField} from '@mui/material';


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

          <div>
          <TextField  label="Username" value={username} onChange={(e) => setUsername(e.target.value)} focused/>   
           </div>
          <br />
          <div>
           <TextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <br />
          
          <Button type="submit" variant="contained">Login</Button>
        </form>
    </div>
  );
};

// Export the component for use in other parts of the application
export default Login;
