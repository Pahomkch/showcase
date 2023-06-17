import { memo } from 'react'
import { Counter } from 'components/Counter'
import styles from './style.module.scss'

const MainPage = memo(function MainPage() {
  return <div className={styles.container}>
    <p>Hello APP</p>

    <Counter />

    <div className={styles.links}>


      <p className={styles.success}>success</p>
      <p className={styles.info}>info</p>
      <p className={styles.warning}>warning</p>
      <p className={styles.danger}>danger</p>
    </div>
  </div>
})

export default MainPage