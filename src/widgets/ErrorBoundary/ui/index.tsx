import {memo} from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import {Button} from 'shared/ui/Button'

export const ErrorBoundary = memo(function ErrorBoundary(props: {
  className?: string
}) {
  return (
    <div className={classNames(styles.container, props.className)}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h2>Somthing went wrong</h2>
      <Button onClick={() => location.reload()}>🔄</Button>
    </div>
  )
})
