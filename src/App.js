import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/auth/Signup';
import SignIn from './components/auth/SignIn';
import Beer from './img/beers-cheers.png';
import Status from './components/status/Status'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/signup" component={ SignUp }></Route>
            <Route path="/signin" component={ SignIn }></Route>
            <Route path="/" component={ Status }></Route>
          </Switch>
          <img src={Beer} alt="Beer glasses clinking"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
