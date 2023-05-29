import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
import { Layout } from "pages/Layout";
import MainPage from "pages/MainPage";
const LazyAboutPage = lazy(() => import('pages/About'));

export enum AppRoutesEnum {
  MAIN = '/',
  ABOUT = '/about'
}

const routers: Record<AppRoutesEnum, RouteObject> = {
  [AppRoutesEnum.MAIN]: {
    path: AppRoutesEnum.MAIN,
    element: <MainPage />,
  },

  [AppRoutesEnum.ABOUT]: {
    path: AppRoutesEnum.ABOUT,
    element: <LazyAboutPage />,
  },
}

export const AppRoutes = memo(function AppRoutes(props: { className?: string }) {
  return <Suspense fallback={<div>🌀Loading🌀</div>}>
    <Layout>
      <RouterProvider router={createBrowserRouter(Object.entries(routers).map(([key, value]) => ({ path: key, element: value.element })))} />
    </Layout>
  </Suspense>
})
