import React from 'react'
import './App.css'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Input from './components/input.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
