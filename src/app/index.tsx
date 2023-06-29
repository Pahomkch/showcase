import {render} from 'react-dom'
import {StrictMode} from 'react'
import './styles/index.scss'
import {ThemeContextProvider} from 'common/Contexts/ThemeContext'
import {AppRoutes} from './AppRoutes'

render(
  <StrictMode>
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  </StrictMode>,
  document.getElementById('root'),
)
