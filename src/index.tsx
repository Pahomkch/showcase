import { render } from "react-dom"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode, Suspense, lazy } from "react";
import MainPage from "src/pages/main"
import 'src/styles/index.scss'
import { ThemeContextProvider } from "./common/Contexts/ThemeContext";
import { Layout } from "./components/Layout";
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
  <ThemeContextProvider>
    <Suspense fallback={<div>🌀Loading🌀</div>}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Suspense>
  </ThemeContextProvider>
</StrictMode>, document.getElementById('root'));
