import classNames from 'classnames'
import {ReactNode, memo} from 'react'
import {useTheme} from 'shared/hooks/useTheme'
import styles from './style.module.scss'
import {Header} from 'widgets/Header'
import {Sidebar} from 'widgets/Sidebar'

export const Layout = memo(function Layout(props: {children: ReactNode}) {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', theme, styles.layout)}>
      <Header className={styles['span-2']} />
      <Sidebar />
      <main className={classNames(styles.content)}>{props.children}</main>
    </div>
  )
})
