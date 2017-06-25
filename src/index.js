
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'store'
import LanguageProvider from 'containers/LanguageProvider'
import { translationMessages } from 'util/i18n'
import injectTapEventPlugin from 'react-tap-event-plugin'

// route components
import App from 'containers/App'

// Main Application Styles
import 'styles/app.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

function render (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          <div className='routerRoot'>
            <Route path='/' component={Component} />
          </div>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// Enable HMR for js files
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    render(NextApp)
  })
}
