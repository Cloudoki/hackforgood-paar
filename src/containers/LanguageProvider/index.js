/*
 *
 * Language Provider
 *
 * connects the redux state locale to the
 * IntlProvider component and i18n messages
 * loaded from `src/translations`.
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider
    locale={locale}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  messages: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired
}

const mapStateToProps = ({ locale }) => (locale)

export default connect(mapStateToProps)(LanguageProvider)
