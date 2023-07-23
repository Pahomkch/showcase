import {memo} from 'react'
import styles from './style.module.scss'
import {useTranslation} from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFoundPage = memo(function NotFoundPage() {
  const {t} = useTranslation()

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t('Not found page')}</p>
      <Link to="/" >{t('Go back')}</Link>
    </div>
  )
})

export default NotFoundPage
