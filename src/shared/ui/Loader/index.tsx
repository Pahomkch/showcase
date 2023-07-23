import {memo} from 'react'
import './style.scss'
import classNames from 'classnames'

export const Loader = memo(function Layout(props: {isFullScreen?: boolean}) {
  return (
    <div
      className={classNames('page__loader', {
        'full-h-screen': props.isFullScreen,
      })}
    >
      <div className="page__loader__icon">
        <div></div>
      </div>
    </div>
  )
})
