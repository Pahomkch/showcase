import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import {lazy, memo} from 'react'
import {Layout} from 'shared/ui/Layout'
import MainPage from 'pages/MainPage'
const LazyAboutPage = lazy(() => import('pages/About'))
const LazyNotFoundPage = lazy(() => import('pages/NotFoundPage'))

// eslint-disable-next-line no-unused-vars
enum AppRoutesEnum {
  // eslint-disable-next-line no-unused-vars
  MAIN = '/',
  // eslint-disable-next-line no-unused-vars
  ABOUT = '/about',
  // eslint-disable-next-line no-unused-vars
  OTHER = '*',
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

  [AppRoutesEnum.OTHER]: {
    path: AppRoutesEnum.ABOUT,
    element: (
      <Layout>
        <LazyNotFoundPage />
      </Layout>
    ),
  },
}

export const AppRoutes = memo(function AppRoutes() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        Object.entries(routers).map(([key, value]) => ({
          path: key,
          element: value.element,
        })),
      )}
    />
  )
})
