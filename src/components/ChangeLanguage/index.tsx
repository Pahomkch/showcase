import {Button} from 'components/Button'
import {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'

export const ChangeLanguage = memo(function ChangeLanguage() {
  const {t, i18n} = useTranslation()

  const toggleLanguage = useCallback(
    () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru'),
    [],
  )

  return <Button onClick={toggleLanguage}>{t('Language')}</Button>
})
