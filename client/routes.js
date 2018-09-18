import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Homepage} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Homepage} />
        <Route component={Homepage} />
      </Switch>
    )
  }
}

export default Routes
