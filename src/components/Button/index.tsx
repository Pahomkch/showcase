import {ButtonHTMLAttributes, memo, useState} from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import MoonSvg from 'src/common/assets/icons/moon.svg'
import SunSvg from 'src/common/assets/icons/sun.svg'
import SunPng from 'src/common/assets/icons/sun-png.png'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string
}

export const Button = memo(function Button(props: ButtonProps) {
  return <button className={classNames(styles.button, props.classNames)}>
    <MoonSvg />
    <SunSvg />
    <img src={SunPng} alt="sun" />
    {props.children}
  </button>
})
