import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App =()=> {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/history' component={History}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </Router>
  );
};

export default App;
