import {
  ComponentProps,
  MouseEventHandler,
  ReactNode,
  memo,
  useCallback,
  useEffect,
} from 'react'
import styles from './style.module.scss'
import {Portal} from 'shared/Portal/inde'
import classNames from 'classnames'

export const Modal = memo(function Modal(props: {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: VoidFunction
  target?: ComponentProps<typeof Portal>['target']
}) {
  const handleOverlayClick = useCallback(() => {
    const onClose = props.onClose
    onClose()
  }, [props.onClose])

  const handleContentClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      event.stopPropagation()
    },
    [],
  )

  const handleEscClick = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOverlayClick()
      }
    },
    [handleOverlayClick],
  )

  // close modal by press Esc
  useEffect(() => {
    window.addEventListener('keydown', handleEscClick)
    return () => {
      window.removeEventListener('keydown', handleEscClick)
    }
  }, [handleEscClick])

  return (
    <Portal target={props.target}>
      <div
        className={classNames(props.className, styles.overlay, {[styles.open]: props.isOpen})}
        onClick={handleOverlayClick}
      >
        <div className={styles.content} onClick={handleContentClick}>
          {props.children}
        </div>
      </div>
    </Portal>
  )
})
