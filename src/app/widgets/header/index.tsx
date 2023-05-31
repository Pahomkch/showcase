import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export const Header = memo(function Header(props: { className?: string }) {
  return <header className={styles.container}>
    <Link className={styles.link} to="/">Main</Link>
    <Link className={styles.link} to="/about">About</Link>
  </header>
})
