/*
 *
 * Combine all reducers in the this file
 * and export them.
 *
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import locale from 'containers/LanguageProvider/reducer'

import auth from 'containers/Auth/reducer'

export default combineReducers({
  routing,
  auth,
  locale
})
