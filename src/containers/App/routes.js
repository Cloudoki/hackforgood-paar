
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
    <Route path='/filter' component={requireAuth(Filter, 'user')} />
    <Route path='/addprofile' component={requireAuth(AddProfile, 'user')} />
    <Route path='/profile' component={requireAuth(Profile, 'user')} />
    <Route path='/chat' component={requireAuth(ChatPage, 'user')} />
    <Route path='/info' component={Info} />
    <Route component={NotFound} />
  </Switch>
)
