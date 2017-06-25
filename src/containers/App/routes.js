
import React from 'react'
import { Route, Switch } from 'react-router'

import requireAuth from 'containers/Auth'
import NotFound from 'components/NotFound'
import Login from 'containers/Auth/Login'
import HomePage from 'containers/HomePage'
import AddProfile from 'containers/AddProfile'
import Profile from 'containers/Profile'
import ChatPage from 'containers/ChatPage'
import Protected from 'components/Protected'

export default () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' component={Login} />
    <Route path='/addprofile' component={AddProfile} />
    <Route path='/profile' component={Profile} />
    <Route path='/chat' component={ChatPage} />
    <Route path='/protected' component={requireAuth(Protected, 'user')} />
    <Route component={NotFound} />
  </Switch>
)
