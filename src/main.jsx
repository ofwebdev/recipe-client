import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component
import Main from "./layout/Main/Main";
import Chafe from "./pages/Chafe/Chafe";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import Register from "./pages/register/Register";
import AuthProvider from "./provider/AuthProvider";
import Notfound from "./pages/Notfound/Notfound";
import RecipeLayout from "./layout/RecipeLayout/RecipeLayout";
import Recipe from "./components/Recipe/Recipe";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Policy from "./components/Policy/Policy";

// https://server-ofwebdev.vercel.app/recipe

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Chafe />,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe`),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/policy",
    element: <Policy />,
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
    element: <Blog></Blog>,
    loader: () => fetch(`http://localhost:5000/blog`),
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
