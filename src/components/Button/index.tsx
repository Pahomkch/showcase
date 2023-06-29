import {ButtonHTMLAttributes, memo, useState} from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string
}

export const Button = memo(function Button(props: ButtonProps) {
  return (
    <button className={classNames(styles.button, props.classNames)}>
      {props.children}
    </button>
  )
})
