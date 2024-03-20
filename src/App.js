import './App.css';
import Login from './components/Login/Login';
import logo from './logo4.svg';
import SignUp from './components/Signup/Signup';
import Slideshow from './components/Slideshow/Slideshow'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Slideshow/>
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
