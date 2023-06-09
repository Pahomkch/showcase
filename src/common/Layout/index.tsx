import classNames from 'classnames'
import {ReactNode, memo} from 'react'
import {useTheme} from 'common/hooks/useTheme'
import styles from './style.module.scss'
import {Header} from 'app/widgets/Header'
// import MoonSvg from 'src/common/assets/icons/moon.svg'
// import SunSvg from 'src/common/assets/icons/sun.svg'
// import SunPng from 'src/common/assets/icons/sun-png.png'
import {Sidebar} from 'app/widgets/Sidebar'

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
