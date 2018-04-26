import React from 'react'
import Game from './Game'
import { Link } from 'react-router-dom'

const Welcome = () => (
    <div>
      <h1>Welcome to Aligator Tooth Doctor!</h1>
      <h4>Are you ready to pull some teeth?</h4>
      <Link to='/Game'>Get Started</Link>
    </div>
)

export default Welcome
