import {ButtonHTMLAttributes, memo} from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 's' | 'm' | 'l'
  rounded?: 'small' | 'medium' | 'full'
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button = memo(function Button(props: ButtonProps) {
  const {
    className,
    size = 'm',
    rounded = 'medium',
    variant = 'primary',
    ...other
  } = props

  return (
    <button
      className={cn(styles.button, className, {
        [styles.size__s]: size === 's',
        [styles.size__s]: size === 'm',
        [styles.size__l]: size === 'l',

        [styles.round__small]: rounded === 'small',
        [styles.round__medium]: rounded === 'medium',
        [styles.round__full]: rounded === 'full',

        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.outline]: variant === 'outline',
      })}
      {...other}
    >
      {props.children}
    </button>
  )
})
