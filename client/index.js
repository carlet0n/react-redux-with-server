import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './store'
import Routes from './Routes'
import history from './history'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
