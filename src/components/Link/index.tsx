import { memo, useState } from 'react'
import styles from './style.module.scss'
import { LinkProps, Link as ReactRouterDomLink } from 'react-router-dom'
import cn from 'classnames'

export const Link = memo(function Link(
  props: { className?: string; theme?: 'primary' | 'secondary' } & LinkProps,
) {
  return (
    <ReactRouterDomLink
      className={cn(styles.link, props.className, {
        [styles[props.theme]]: props.theme,
      })}
      to={props.to}
    >
      {props.children}
    </ReactRouterDomLink>
  )
})
