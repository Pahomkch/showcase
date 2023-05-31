import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import { useTheme } from 'common/hooks/useTheme'
import styles from './style.module.scss'
import { Header } from 'app/widgets/header'

export const Layout = memo(function Layout(props: { children: ReactNode }) {
  const { changeTheme, theme } = useTheme()

  return <div className={classNames('app', theme, styles.container)}>
    <Header />

    <button className={styles['theme-toggle']} onClick={changeTheme}>
      <span className={styles['square-button-content']}>{theme === 'light' ? '🌚' : '☀️'}</span>
    </button>

    <main className={styles.content}>
      {props.children}
    </main>

  </div>
})
