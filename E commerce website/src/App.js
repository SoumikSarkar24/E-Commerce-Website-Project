import React from "react";
import ReactDOM from "react-dom/client";
// default export
import Navbar from "./components/Navbar";
// named export
import { ProductCard } from "./components/ProductCard";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Kid from "./components/Kid";
import Error from "./components/Error";
import Men from "./components/Men";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {   path:"/",
                element:<ProductCard/>
            },
            {
                path:"/kid",
                element:<Kid/>
            },
            {
                path:"/men",
                element:<Men/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/product/:productId",
                element:<ProductDetails/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router = {appRouter} />);