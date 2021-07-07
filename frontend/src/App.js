import React from 'react'
import './App.css'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Input from './components/input.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
