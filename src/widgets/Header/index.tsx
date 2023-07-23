import {memo} from 'react'
import styles from './style.module.scss'
import {Link} from 'shared/ui/Link'
import classNames from 'classnames'
import {useTranslation} from 'react-i18next'

export const Header = memo(function Header(props: {className?: string}) {
  const {t} = useTranslation()

  return (
    <header className={classNames(styles.container, props.className)}>
      <Link className={styles.link} to="/">
        {t('Main')}
      </Link>
      <Link className={styles.link} to="/about">
        {t('About')}
      </Link>
    </header>
  )
})
