
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authLogin } from 'containers/Auth/actions'
import ThemeProvider from 'components/ThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'

import routes from './routes'

const createOnClick = (fn, value) => event => fn(value)

class App extends Component {
  state = {
    drawerOpen: false
  }

  componentWillMount () {
    const { auth } = this.props
    if (auth.token != null) {
      this.props.userAuthLogin(auth.authToken)
    }
  }

  _handleRequestChange = (open) => {
    this.setState({ drawerOpen: !!open })
  }

  _toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  _navigate = (path) => {
    const { history } = this.props
    this._toggleDrawer()
    history.push(path)
  }

  render () {
    const { drawerOpen } = this.state
    const { intl } = this.context
    const messages = intl.messages
    return (
      <ThemeProvider>
        <div>
          <AppBar
            title='PAAR'
            onLeftIconButtonTouchTap={this._toggleDrawer}
          />
          <Drawer
            docked={false}
            width={250}
            open={drawerOpen}
            onRequestChange={this._handleRequestChange}
          >
            <MenuItem onTouchTap={createOnClick(this._navigate, '/')}>{messages['app.drawer.home']}</MenuItem>
            <MenuItem onTouchTap={createOnClick(this._navigate, 'addprofile')}>{messages['app.drawer.profile']}</MenuItem>
          </Drawer>
          {routes()}
        </div>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  userAuthLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

App.contextTypes = {
  intl: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = (dispatch) => ({
  userAuthLogin: (token) => dispatch(authLogin(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
