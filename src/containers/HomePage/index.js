
import React from 'react'
import PropTypes from 'prop-types'

const HomePage = (props, { intl: { messages } }) => (
  <div style={styles.container}>
    <h1>{messages['test.working']}</h1>
  </div>
)

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

HomePage.contextTypes = {
  intl: PropTypes.object.isRequired
}

export default HomePage
