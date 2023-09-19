import {ReactNode, memo} from 'react'
import {createPortal} from 'react-dom'

export const Portal = memo(function Portal(props: {
  children: ReactNode
  target?: Element
}) {
  const node = props.target ?? document.querySelector('.app')
  return createPortal(props.children, node)
})
