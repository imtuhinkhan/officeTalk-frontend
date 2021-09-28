import logo from './logo.svg';
import './App.css';
import MainRouter from "./MainRouter";
import {HashRouter,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <MainRouter/>
        </Router>
    </>
  );
}

export default App;
