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
import RecipeLayout from "./layout/RecipeLayout/RecipeLayout";
import Recipe from "./components/Recipe/Recipe";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BlogPost from "./pages/Blog/BlogDetails";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe`),
      },
      {
        path: "/country/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/country/${params.id}`),
      },
    ],
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

  {
    path: "/recipe",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Recipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout></BlogLayout>,
    children: [],
  },

  {
    path: "blog/:id",
    element: (
      <PrivateRoute>
        <BlogDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
