import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Admin-Dashboard/Dashboard/Dashboard";

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
