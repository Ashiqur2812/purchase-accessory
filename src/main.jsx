import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./Components/AllProducts/AllProducts";
import Dashboard from "./Components/Dashboard/Dashboard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:category",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
        children: [
          {
            path: "/dashboard/:product_id",
            element: <Dashboard></Dashboard>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
