import React from 'react'
import './App.css'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Login from './components/Login.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
