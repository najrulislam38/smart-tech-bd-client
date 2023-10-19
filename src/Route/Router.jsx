import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apple from "../Pages/Apple/Apple";
import Samsung from "../Pages/Samsung/Samsung";
import Dell from "../Pages/Dell/Dell";
import Google from "../Pages/Google/Google";
import Sony from "../Pages/Sony/Sony";
import Intel from "../Pages/Intel/Intel";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpateProduct/UpdateProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/addProducts"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/dell",
        element: <Dell></Dell>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
        loader: () => fetch("https://smart-tech-bd-server.vercel.app/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://smart-tech-bd-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://smart-tech-bd-server.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
