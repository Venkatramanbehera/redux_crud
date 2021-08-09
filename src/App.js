import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import NumbersContainer from './components/NumbersApp/NumbersContainer'
import User from './components/Users/User'

const App = (props) => {
  return (
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer/>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>

      <Route path="/" component={Home} exact={ true }/>
      <Route path="/user" component={User} exact={ true }/>
    </div>
  )
}

export default App
