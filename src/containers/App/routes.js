
import React from 'react'
import { Route, Switch } from 'react-router'

import requireAuth from 'containers/Auth'
import NotFound from 'components/NotFound'
import Login from 'containers/Auth/Login'
import HomePage from 'containers/HomePage'
import Filter from 'containers/Filter'
import Protected from 'components/Protected'
import AddProfile from 'containers/AddProfile'

export default () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' component={Login} />
    <Route path='/filter' component={Filter} />
    <Route path='/protected' component={requireAuth(Protected, 'user')} />
    <Route path='/addprofile' component={AddProfile} />
    <Route component={NotFound} />
  </Switch>
)
