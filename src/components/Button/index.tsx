import {ButtonHTMLAttributes, memo} from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = memo(function Button(props: ButtonProps) {
  const {className, ...other} = props
  return (
    <button className={cn(styles.button, className)} {...other}>
      {props.children}
    </button>
  )
})
