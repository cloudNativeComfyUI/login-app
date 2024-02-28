import './App.css';
import Login from './components/Login/Login';
import logo from './logo4.svg';
import SignUp from './components/Signup/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
