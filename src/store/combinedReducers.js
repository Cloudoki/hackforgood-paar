/*
 *
 * Combine all reducers in the this file
 * and export them.
 *
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import locale from 'containers/LanguageProvider/reducer'
import people from 'containers/Profile/reducer'

import auth from 'containers/Auth/reducer'
import refugees from 'containers/HomePage/reducer'

export default combineReducers({
  routing,
  auth,
  refugees,
  locale,
  people
})
