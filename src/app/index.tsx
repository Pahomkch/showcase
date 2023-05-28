import { render } from "react-dom"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode, Suspense, lazy } from "react";
import { Layout } from "pages/Layout";
import MainPage from "pages/MainPage";
import './styles/index.scss'
import { ThemeContextProvider } from "common/Contexts/ThemeContext";
const LazyAboutPage = lazy(() => import('pages/About'));

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
  <ThemeContextProvider>
    <Suspense fallback={<div>🌀Loading🌀</div>}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Suspense>
  </ThemeContextProvider>
</StrictMode>, document.getElementById('root'));
