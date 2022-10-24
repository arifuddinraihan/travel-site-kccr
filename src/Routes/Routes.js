import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: '/products',
                element: 
                <PrivateRoute>
                    <Products></Products>
                </PrivateRoute>
            },
        ]
    }
])