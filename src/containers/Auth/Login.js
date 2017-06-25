import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from './actions'
import { TextField, RaisedButton } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';


class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  _handleEmailChange = ({ target }) => {
    const { value } = target
    this.setState({ email: value })
  }

  _handlePwdChange = ({ target }) => {
    const { value } = target
    this.setState({ password: value })
  }

  _onButtonClick = () => {

    console.log("login clicked!!");
    const { email, password } = this.state

    if (email.length && password.length) {
      this.props.logUserIn({ email, password })
    }
  }

  render () {
    const { email, password } = this.state
    return (
      <div style={styles.container}>
        <div>
          <h1 style={styles.header}>PAAR Login</h1>
          <div>
            <TextField
              hintText=""
              floatingLabelText="Email"
              value={email}
              onChange={this._handleEmailChange}
            /><br />

            <TextField
              hintText=""
              floatingLabelText="Password"
              type="password"
              value={password}
              onChange={this._handlePwdChange}
            /><br />

            <RaisedButton
              onClick={this._onButtonClick}
              target="_blank"
              label="Login"
              primary={true}
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
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
    marginTop: 25,
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
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
