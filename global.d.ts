declare module '*.module.scss' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean
