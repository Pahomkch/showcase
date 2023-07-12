import {render} from 'react-dom'
import {StrictMode, Suspense} from 'react'
import './styles/index.scss'
import {ThemeContextProvider} from 'common/Contexts/ThemeContext'
import {AppRoutes} from './AppRoutes'
import '../../config/i18n'

render(
  <StrictMode>
    <ThemeContextProvider>
      <Suspense fallback="loading...">
        <AppRoutes />
      </Suspense>
    </ThemeContextProvider>
  </StrictMode>,

  document.getElementById('root'),
)
