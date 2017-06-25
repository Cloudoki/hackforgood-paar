
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThemeProvider from 'components/ThemeProvider'
import { AppBar, Drawer, MenuItem } from 'material-ui'

class Info extends Component {

  render() {
    return (
      <div style={styles.container}>
        The info page
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default connect(null)(Info)
