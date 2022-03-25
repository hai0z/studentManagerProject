import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'

const Routes = () => {
  return (
      <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
      </Switch>
  )
}

export default Routes