import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import { useTheme } from 'src/common/hooks/useTheme'
import styles from './style.module.scss'

export const Layout = memo(function Layout(props: { children: ReactNode }) {
  const { changeTheme, theme } = useTheme()

  return <div className={classNames('app', theme, styles.container)}>
    <button className={styles['theme-toggle']} onClick={changeTheme}>
      <span className={styles['square-button-content']}>{theme === 'light' ? '🌚' : '☀️'}</span>

    </button>
    {props.children}
  </div>
})
