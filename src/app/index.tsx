import {render} from 'react-dom'
import {StrictMode, Suspense} from 'react'
import './styles/index.scss'
import {ThemeContextProvider} from 'app/Contexts/ThemeContext'
import {AppRoutes} from './AppRoutes'
import '../../config/i18n'
import {Loader} from 'shared/ui/Loader'
import {ErrorBoundary} from './Contexts/ErrorBoundary'
import {ErrorBoundary as FallbackComponent} from 'widgets/ErrorBoundary/ui'

render(
  <StrictMode>
    <Suspense fallback={<Loader isFullScreen />}>
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ThemeContextProvider>
          <AppRoutes />
        </ThemeContextProvider>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>,

  document.getElementById('root'),
)
