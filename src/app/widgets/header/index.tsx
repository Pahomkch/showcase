import { memo } from 'react'
import styles from './style.module.scss'
import { Link } from 'components/Link'

export const Header = memo(function Header(props: { className?: string }) {
  return <header className={styles.container}>
    <Link className={styles.link} to="/">Main</Link>
    <Link className={styles.link} to="/about">About</Link>
  </header>
})
