import {memo, useCallback, useState} from 'react'
import styles from './style.module.scss'
import {Link} from 'components/Link'
import {useTheme} from 'common/hooks/useTheme'
import {Button} from 'components/Button'
import classNames from 'classnames'

export const Sidebar = memo(function Sidebar(props: {className?: string}) {
  const {changeTheme, theme} = useTheme()
  const [isClose, setIsClose] = useState(true)
  const toggle = useCallback(() => setIsClose((flag) => !flag), [])
  console.log(isClose)
  return (
    <div
      className={classNames(styles.container, props.className, {
        [styles.close]: isClose,
      })}
    >
      <Button onClick={toggle}>{isClose ? 'Show' : 'Close'}</Button>

      <button className={styles['theme-toggle']} onClick={changeTheme}>
        <span className={styles['square-button-content']}>
          {theme === 'light' ? '🌚' : '☀️'}
        </span>
      </button>

      <Button>RU</Button>
    </div>
  )
})
