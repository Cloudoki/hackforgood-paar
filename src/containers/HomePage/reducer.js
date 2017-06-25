/*
 *
 * Auth reducer
 *
 */

import Immutable from 'seamless-immutable'
import {
  GET_REFUGEES
} from './constants'

const initialState = Immutable.from({
  refugees: [
      {
        id: 1,
        name: "Refugee 1",
        address: "The address",
        status: "mentor",
        data: []
    },
    {
        id: 2,
        name: "Refugee 2",
        address: "The address",
        status: "mentor",
        data: []
    },
    {
        id: 3,
        name: "Refugee 3",
        address: "The address",
        status: "refugee",
        data: []
    },
    {
        id: 4,
        name: "Refugee 4",
        address: "The address",
        status: "refugee",
        data: []
    }
  ]
})

function appReducer (state = initialState, action) {
  switch (action.type) {
    case GET_REFUGEES:
      return state
    default:
      return state
  }
}

export default appReducer
