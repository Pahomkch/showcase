import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'src/components/Counter'
import styles from './style.module.scss'
import classNames from 'classnames'
import { useTheme } from 'src/common/hooks/useTheme'

export const MainPage = memo(function MainPage() {
  const {changeTheme, theme} = useTheme()

  return <div className={classNames('app', theme, styles.container)}>
    <p>Hello APP</p>
    <button onClick={changeTheme}>{theme === 'light' ? '🌚' : '☀️'}</button>

    <Counter />

    <div className={styles.links}>
      <Link className={styles.link} to="/">Main</Link>
      <Link className={styles.link} to="/about">About</Link>

      <p className={styles.success}>success</p>
      <p className={styles.info}>info</p>
      <p className={styles.warning}>warning</p>
      <p className={styles.danger}>danger</p>
    </div>
  </div>
})
