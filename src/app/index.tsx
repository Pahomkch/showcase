import {render} from 'react-dom'
import {StrictMode, Suspense} from 'react'
import './styles/index.scss'
import {ThemeContextProvider} from 'shared/Contexts/ThemeContext'
import {AppRoutes} from './AppRoutes'
import '../../config/i18n'
import { Loader } from 'shared/ui/Loader'

render(
  <StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={<Loader isFullScreen />}>
        <AppRoutes />
      </Suspense>
    </ThemeContextProvider>
  </StrictMode>,

  document.getElementById('root'),
)
