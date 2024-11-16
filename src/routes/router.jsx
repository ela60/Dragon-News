import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
      element: <AuthLayout />,
      children: [
          {
              path: "/auth/login",
              element: <Login/>
        },
          {
              path: "/auth/register",
              element: <Register/>
        },
    ]
  },
  {
    path: "*",
    element: <h1>Error - Page Not Found</h1>,
  },
]);

export default router;
