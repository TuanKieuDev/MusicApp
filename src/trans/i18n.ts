import i18n from 'i18n-js'
import vi from './vi'
import en from './en'
i18n.locale = 'vi'
i18n.fallbacks = true
i18n.translations = {vi,en};