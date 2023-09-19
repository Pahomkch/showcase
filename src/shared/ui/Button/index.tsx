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
        [styles.sizeS]: size === 's',
        [styles.sizeM]: size === 'm',
        [styles.sizeL]: size === 'l',

        [styles.roundSmall]: rounded === 'small',
        [styles.roundMedium]: rounded === 'medium',
        [styles.roundFull]: rounded === 'full',

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
