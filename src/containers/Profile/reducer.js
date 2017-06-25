/*
 *
 * People reducer
 *
 */

import Immutable from 'seamless-immutable'

const initialState = Immutable.from({
  people: [
    { id: 1, name: 'Brendan Lim', avatar: '/assets/ok-128.jpg', birthday: '25/10/1987', country: 'Syria', skills: ['Carpintaria', 'Cozinheiro', 'foo'], experience: { job: 'Cook', title: 'Cheef', date: '10/01/2005' }, languages: ['Syrian'] },
    { id: 2, name: 'Grace Ng', avatar: '/assets/uxceo-128.jpg', birthday: '20/9/1983', country: 'Iraque', skills: ['Carpintaria', 'Dança', 'Cozinheiro', 'foo'], experience: { job: 'Motorist', title: '1st class', date: '10/01/2005' }, languages: ['Kurdish'] },
    { id: 3, name: 'Kerem Suer', avatar: '/assets/kerem-128.jpg', birthday: '15/11/1990', country: 'Syria', skills: ['Cozinheiro', 'foo'], experience: { job: 'Mecanic', title: '1st class', date: '10/01/2005' }, languages: ['Syrian'] },
    { id: 4, name: 'Eric Hoffman', avatar: '/assets/kolage-128.jpg', birthday: '25/10/1987', country: 'Iraque', skills: ['Cozinheiro', 'Empregado de mesa', 'foo'], experience: { job: 'Mecanic', title: '1st class', date: '10/01/2005' }, languages: ['Kurdish'] },
    { id: 5, name: 'Raquel Parrado', avatar: '/assets/raquelromanp-128.jpg', birthday: '14/3/1987', country: 'Syria', skills: ['Carpinteiro', 'Empregado de mesa', 'foo'], experience: { job: 'Cook', title: 'Cheef', date: '10/01/2005' }, languages: ['Syrian'] }
  ]
})

function appReducer (state = initialState, action) {
  return state
}

export default appReducer
