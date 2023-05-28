import { ThemeContext } from "common/Contexts/ThemeContext"
import { useCallback, useContext } from "react"

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const changeTheme = useCallback
    (() => {
      toggleTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme])

  return {
    theme,
    changeTheme
  }

}
