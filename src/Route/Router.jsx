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
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
      },
      {
        path: "/dell",
        element: <Dell></Dell>,
      },
      {
        path: "/google",
        element: <Google></Google>,
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
      },
    ],
  },
]);

export default Router;
