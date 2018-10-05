import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Page1 from './pages/Page1'
// import Page2 from './pages/Page2'
// import Page3 from './pages/Page3'
import Clock from './subcomponents/Clock'

// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
