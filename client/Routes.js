import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Game from './Game'

const Routes = () => (
    <div className="fill-xy center-xy column">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/game' component={Game}/>
      </Switch>
    </div>
)

export default Routes