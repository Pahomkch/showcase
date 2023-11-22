import {ThemeContext} from 'app/Contexts/ThemeContext'
import {useCallback, useContext} from 'react'

export const useTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  const changeTheme = useCallback(() => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }, [toggleTheme, theme])

  return {
    theme,
    changeTheme,
  }
}
