
import React from 'react'
import { Route, Switch } from 'react-router'

import requireAuth from 'containers/Auth'
import NotFound from 'components/NotFound'
import Login from 'containers/Auth/Login'
import HomePage from 'containers/HomePage'
import Filter from 'containers/Filter'
import AddProfile from 'containers/AddProfile'
import Profile from 'containers/Profile'
import ChatPage from 'containers/ChatPage'
import Info from 'containers/Info'

export default () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' component={Login} />
    <Route path='/filter' component={Filter} />
    <Route path='/addprofile' component={AddProfile} />
    <Route path='/profile' component={Profile} />
    <Route path='/chat' component={ChatPage} />
    <Route path='/info' component={Info} />
    <Route component={NotFound} />
  </Switch>
)
