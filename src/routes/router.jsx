import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";

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
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error - Page Not Found</h1>,
  },
]);

export default router;
