import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route path="/home" element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
