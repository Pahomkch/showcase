import { render } from "react-dom"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode, Suspense, lazy } from "react";
import MainPage from "src/pages/main"
import './globalStyle.scss'
const LazyAboutPage = lazy(() => import('src/pages/about'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "/about",
    element: <LazyAboutPage />,
  },
]);



render(<StrictMode>
  <Suspense fallback={<div>🌀Loading🌀</div>}>
    <RouterProvider router={router} />
  </Suspense>
</StrictMode>, document.getElementById('root'));
