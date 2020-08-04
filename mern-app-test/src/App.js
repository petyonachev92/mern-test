import React from 'react';
import { Switch, Link, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import login from './login.js';
import home from './home.js';
import register from './registration.js';
import schedule from './schedule';

function App() {
  return (
    <div>
      <div className="navigation">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/schedule">Schedule</Link>
          <Switch>
            <Route path="/login" component={login} exact/>
            <Route path="/register" component={register} exact/>
            <Route path="/schedule" component={schedule} exact/>
            <Route path="/" component={home} exact/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
