import { render } from "react-dom"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import MainPage from "src/pages/main"
import './globalStyle.scss'
import AboutPage from "src/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },
]);



render(<StrictMode>
  <RouterProvider router={router} />
</StrictMode>, document.getElementById('root'));
