import {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react'

export type Theme = 'light' | 'dark'

const themeTypeGuard = (theme: string): theme is Theme =>
  ['light', 'dark'].includes(theme)

export const LOCAL_STORAGE_THEME_KEY = 'user-theme'

interface ThemeContext {
  theme: Theme
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
})

function getThemeFromLocalStorage(): Theme {
  const userTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  return themeTypeGuard(userTheme) ? userTheme : 'light'
}

export const ThemeContextProvider = memo(function ThemeContextProvider(props: {
  children: ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage())

  const toggleTheme = useCallback<ThemeContext['toggleTheme']>((theme) => {
    setTheme(theme)
  }, [])

  const values: ThemeContext = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  )
})
