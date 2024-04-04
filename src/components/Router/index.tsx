
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import ProductPage from "../../pages/ProductPage";
import Contact from "../../pages/Contact";
import Cart from "../../pages/Cart";
import Success from "../../pages/Success";





const Router = createBrowserRouter([

    {
    path: "/",
    element: <Layout />,
    children: [

        {
            path: "",
            element: <Home /> ,

        },
        {
            path: "contact",
            element: <Contact /> ,

        },
        {
            path: "cart",
            element: <Cart /> ,

        },
        {
            path: "/:id",
            element: <ProductPage />
        },
        {
            path: "success",
            element: <Success />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        },

    ]
}]);

export default Router;