import { useCallback, useContext } from "react"
import { ThemeContext } from "src/common/Contexts/ThemeContext"

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
