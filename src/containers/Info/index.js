
import React, { Component } from 'react'

class Info extends Component {
  render () {
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
    alignItems: 'center',
    paddingTop: 84
  }
}

export default Info
