import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'components/Counter'
import styles from './style.module.scss'

export const MainPage = memo(function MainPage() {
  return <div className={styles.container}>
    <p>Hello APP</p>

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
