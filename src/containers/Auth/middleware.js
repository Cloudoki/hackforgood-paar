/*
 *
 * Auth Middleware
 *
 */

import cookie from 'react-cookie'
import { history } from 'store'
import {
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  AUTH_LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOKEN_KEY,
  TOKEN_MAX_AGE
} from './constants'

const authMiddleware = (store) => (next) => (action) => {
  next(action)
  if (action.type === LOGIN_USER_SUCCESS || action.type === SIGNUP_USER_SUCCESS) {
    cookie.save(TOKEN_KEY, action.data.token, {
      path: '/',
      maxAge: TOKEN_MAX_AGE
    })

    let navigateTo = action.data.email == 'institution@test.com'? '/': '/profile'

    const nextPath = history.location.state && history.location.state.onSuccess ? history.location.state.onSuccess : navigateTo
    history.replace(nextPath)
  } else if (action.type === AUTH_LOGIN_USER_ERROR) {
    cookie.remove(TOKEN_KEY)
  } else if (action.type === LOGOUT_USER) {
    cookie.remove(TOKEN_KEY)
    history.replace('/login')
  }
}

export default authMiddleware
