import {memo} from 'react'
import styles from './style.module.scss'
import {Link} from 'components/Link'
import classNames from 'classnames'

export const Header = memo(function Header(props: {className?: string}) {
  return (
    <header className={classNames(styles.container, props.className)}>
      <Link className={styles.link} to="/">
        Main
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
    </header>
  )
})
