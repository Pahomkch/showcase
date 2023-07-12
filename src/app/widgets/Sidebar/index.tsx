import {memo, useCallback, useState} from 'react'
import styles from './style.module.scss'
import {Link} from 'components/Link'
import {useTheme} from 'common/hooks/useTheme'
import {Button} from 'components/Button'
import classNames from 'classnames'
import {useTranslation} from 'react-i18next'
import {ChangeLanguage} from 'components/ChangeLanguage'

export const Sidebar = memo(function Sidebar(props: {className?: string}) {
  const {changeTheme, theme} = useTheme()
  const [isClose, setIsClose] = useState(true)
  const toggle = useCallback(() => setIsClose((flag) => !flag), [])
  const {t} = useTranslation()

  return (
    <div
      className={classNames(styles.container, props.className, {
        [styles.close]: isClose,
      })}
    >
      <Button className={styles.toggle} onClick={toggle}>
        {isClose ? t('Open') : t('Close')}
      </Button>

      <button className={styles['theme-toggle']} onClick={changeTheme}>
        <span className={styles['square-button-content']}>
          {theme === 'light' ? '🌚' : '☀️'}
        </span>
      </button>

      <ChangeLanguage />
    </div>
  )
})
