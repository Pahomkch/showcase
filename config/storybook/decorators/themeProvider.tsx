import {Theme} from 'app/Contexts/ThemeContext'
import classNames from 'classnames'
import {FC} from 'react'
import 'app/styles/index.scss'

export const themeProvider = (theme: Theme) => {
  const WithTheme = (StoryComponent: FC) => (
    <div className={classNames('app', theme)}>
      <StoryComponent />
    </div>
  )

  WithTheme.displayName = 'WithTheme'

  return WithTheme
}
