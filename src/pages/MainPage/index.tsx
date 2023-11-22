import {memo, useCallback, useState} from 'react'
import styles from './style.module.scss'
import {useTranslation} from 'react-i18next'
import {Loader} from 'shared/ui/Loader'
import {Button} from 'shared/ui/Button'
import {Modal} from 'shared/Modal'

const MainPage = memo(function MainPage() {
  const {t} = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <div className={styles.container}>
      <p>{t('Hello APP')}</p>
      <div className={styles.cq}>
        <div className={styles.a}></div>
        <div className={styles.b}></div>
        <div className={styles.c}></div>
      </div>

      <div>
        <Button size="s" rounded="small">
          1
        </Button>

        <Button size="m" rounded="medium">
          2
        </Button>

        <Button size="l" rounded="full">
          3
        </Button>

        <Button variant="primary">4</Button>
        <Button variant="secondary">5</Button>
        <Button variant="outline" onClick={openModal}>
          {t('Open modal')}
        </Button>
      </div>

      <div className={styles.links}>
        <p className={styles.success}>{t('success')}</p>
        <p className={styles.info}>{t('info')}</p>
        <p className={styles.warning}>{t('warning')}</p>
        <p className={styles.danger}>{t('danger')}</p>
      </div>

      <div style={{display: 'grid'}}>123</div>

      <div className={styles['grid-container']}>
        <span>{t('Subgrids')}</span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
        <span className={styles.a}></span>
      </div>

      <Modal onClose={closeModal} isOpen={isModalOpen}>
        {t('Hello APP')}
      </Modal>

      <Loader />
    </div>
  )
})

export default MainPage
