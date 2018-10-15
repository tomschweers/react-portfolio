import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
