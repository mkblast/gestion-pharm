import App from "./App";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin",
      element: <Dashboard />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
