import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { Cookies } from 'react-cookie';
import { alpha, styled } from '@mui/material/styles';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || ''
const COMFY_URL = process.env.REACT_APP_COMFY_URL || ''
const postHeaders = new Headers();
postHeaders.append("Content-Type", "application/json");

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(0),
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#B0BEC5' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: '#CFD8DC',
    },
    '&.Mui-focused': {
      backgroundColor: '#CFD8DC',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Login = () => {
  const cookies = new Cookies();
  // State to manage the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const redirectToComfy = () => {
    // Replace '/new-url' with the desired URL
    window.open(COMFY_URL, "_self");
  };

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    const body = JSON.stringify({ 'password': password, 'username': username })

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
        else {
          alert('Invalid username or password')
        }
      });
  };


return (
  <StyledContainer component="main" maxWidth="xs">
    <CssBaseline />
    <div>
      {/* <Typography component="h1" variant="h5">
        Login
      </Typography> */}
      <StyledForm onSubmit={handleLogin}>
        <CustomTextField
          label="Username"
          id="username"
          variant="filled"
          style={{ marginTop: 11 }}
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <CustomTextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          variant="filled"
          value={password}
          style={{ marginTop: 11 }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </StyledButton>
      </StyledForm>
    </div>
  </StyledContainer>
)}

export default Login;
