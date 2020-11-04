import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

const App =()=> {
  return (
    <Router>
      {/* <Home/> */}
      <History/>
    </Router>
  );
};

export default App;
