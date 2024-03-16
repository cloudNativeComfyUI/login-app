import './App.css';
import Login from './components/Login/Login';
import logo from './logo4.svg';
import SignUp from './components/Signup/Signup';
import ComfyUIApp from './components/ComfyUIApp/ComfyUIApp';
// import IFrameComfy from './components/ComfyUIApp/IFrameComfy';
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
       
      </header>
      <div className="App-body">
        {/* <div>{IFrameComfy}</div> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComfyUIApp/>} />
                {/* <Route path="/signup" element={<SignUp/>} />
                <Route path="/comfyuiapp" element={<ComfyUIApp/>} /> */}
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
