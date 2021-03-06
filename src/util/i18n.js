/*
 *
 * i18n
 *
 * This will setup the i18n language files and locale data for app.
 *
 */

import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import ptLocaleData from 'react-intl/locale-data/pt'

import enTranslationMessages from 'translations/en.json'
import ptTranslationMessages from 'translations/pt.json'

addLocaleData(enLocaleData)
addLocaleData(ptLocaleData)

export const appLocales = [
  'en',
  'pt'
]

const formatTranslationMessages = (messages) => {
  const formattedMessages = {}
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage
  }

  return formattedMessages
}

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  pt: formatTranslationMessages(ptTranslationMessages)
}
