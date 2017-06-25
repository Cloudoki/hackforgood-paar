
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThemeProvider from 'components/ThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'

const createOnClick = (fn, value) => event => fn(value)

class HomePage extends Component {

  _navigate = (path) => {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return (
      <div style={styles.container}>
        {this.props.refugees.refugees.map(refugee => {
          return <li
            key={refugee.id}
            onClick={createOnClick(this._navigate, '/refugee/'+refugee.id)}
            >
              {refugee.name}
            </li>
        })}
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 84
  }
}

const mapStateToProps = ({ refugees }) => ({ refugees })

export default connect(mapStateToProps)(HomePage)
