import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from './actions'
import { TextField, RaisedButton } from 'material-ui'
import { localPut } from 'util/storage'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  _handleUsernameChange = ({ target }) => {
    const { value } = target
    this.setState({ username: value })
  }

  _handlePwdChange = ({ target }) => {
    const { value } = target
    this.setState({ password: value })
  }

  _onButtonClick = () => {
    const { username, password } = this.state

    if (username.length && password.length) {
      this.props.logUserIn({ username, password })
    }

    // add username to localstorage
    localPut('username', this.state.username)
  }

  render () {
    const { username, password } = this.state
    return (
      <div style={styles.container}>
        <div>
          <h1 style={styles.header}>Login</h1>
          <div>
            <TextField
              floatingLabelText='Username'
              value={username}
              onChange={this._handleUsernameChange}
            /><br />

            <TextField
              floatingLabelText='Password'
              type='password'
              value={password}
              onChange={this._handlePwdChange}
            />

            <br />

            <RaisedButton
              onClick={this._onButtonClick}
              label='Login'
              primary
              style={styles.button}
            />

          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  logUserIn: PropTypes.func.isRequired
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 25
  },
  header: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    display: 'flex'
  }
}

const mapDispatchToProps = (dispatch) => ({
  logUserIn: (credentials) => dispatch(login(credentials))
})

export default connect(null, mapDispatchToProps)(Login)
