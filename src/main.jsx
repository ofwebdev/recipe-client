import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component
import Main from "./layout/Main/Main";
import Home from "./layout/Home";
import Category from "./pages/Category/Category";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import Register from "./pages/register/Register";
import AuthProvider from "./provider/AuthProvider";
import BlogLayout from "./layout/BlogLayout/BlogLayout";
import Notfound from "./pages/Notfound/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/country/country/${params.id}`),
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout></BlogLayout>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
