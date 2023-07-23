import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import {Suspense, lazy, memo} from 'react'
import {Layout} from 'common/Layout'
import MainPage from 'pages/MainPage'
import { useTranslation } from 'react-i18next'
const LazyAboutPage = lazy(() => import('pages/About'))

// eslint-disable-next-line no-unused-vars
enum AppRoutesEnum {
  // eslint-disable-next-line no-unused-vars
  MAIN = '/',
  // eslint-disable-next-line no-unused-vars
  ABOUT = '/about',
}

const routers: Record<AppRoutesEnum, RouteObject> = {
  [AppRoutesEnum.MAIN]: {
    path: AppRoutesEnum.MAIN,
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },

  [AppRoutesEnum.ABOUT]: {
    path: AppRoutesEnum.ABOUT,
    element: (
      <Layout>
        <LazyAboutPage />
      </Layout>
    ),
  },
}

export const AppRoutes = memo(function AppRoutes() {
  const {t} = useTranslation()

  return (
    <Suspense fallback={<div>🌀{t('Loading')}🌀</div>}>
      <RouterProvider
        router={createBrowserRouter(
          Object.entries(routers).map(([key, value]) => ({
            path: key,
            element: value.element,
          })),
        )}
      />
    </Suspense>
  )
})
