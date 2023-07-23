import {memo} from 'react'
import styles from './style.module.scss'
import {useTranslation} from 'react-i18next'

const MainPage = memo(function MainPage() {
  const {t} = useTranslation()

  return (
    <div className={styles.container}>
      <p>{t('Hello APP')}</p>

      <div className={styles.cq}>
        <div className={styles.a}></div>
        <div className={styles.b}></div>
        <div className={styles.c}></div>
      </div>

      <div className={styles.links}>
        <p className={styles.success}>{t('success')}</p>
        <p className={styles.info}>{t('info')}</p>
        <p className={styles.warning}>{t('warning')}</p>
        <p className={styles.danger}>{t('danger')}</p>
      </div>

      <div style={{display: 'grid'}}>123</div>

      <div className={styles['grid-container']}>
        <span>{t('Subgrids')}</span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
      </div>
    </div>
  )
})

export default MainPage
