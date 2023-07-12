import {memo} from 'react'
import styles from './style.module.scss'

const MainPage = memo(function MainPage() {
  return (
    <div className={styles.container}>
      <p>Hello APP</p>

      <div className={styles.cq}>
        <div className={styles.a}></div>
        <div className={styles.b}></div>
        <div className={styles.c}></div>
      </div>


      <div className={styles.links}>
        <p className={styles.success}>success</p>
        <p className={styles.info}>info</p>
        <p className={styles.warning}>warning</p>
        <p className={styles.danger}>danger</p>
      </div>


      <div style={{display: 'grid'}}>123</div>

      <div className={styles['grid-container']}>
        <span>Subgrids</span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>

      </div>

    </div>
  )
})

export default MainPage
