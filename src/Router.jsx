import App from "./App";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
