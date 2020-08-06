import React from 'react'
import { Switch, Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import login from './Login.js'
import home from './Home.js'
import schedule from './Schedule'
import registration from './Registration.js'

function App () {
  return (
    <div>
      <div className="navigation">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/schedule">Schedule</Link>
          <Switch>
            <Route path="/login" component={login} exact/>
            <Route path="/registration" component={registration} exact/>
            <Route path="/schedule" component={schedule} exact/>
            <Route path="/" component={home} exact/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
