import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { auth } from "./firebase";
import { setUserLoginDetails } from "./features/user/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({user})
        );
      }
    });
  }, [user]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
