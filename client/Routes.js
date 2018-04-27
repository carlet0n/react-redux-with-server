import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import CrocGame from './components/CrocGame'

const Routes = () => (
    <div className="fill-xy center-xy column">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/CrocGame' component={CrocGame}/>
      </Switch>
    </div>
)

export default Routes