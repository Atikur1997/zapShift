import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/login";
import Register from "../pages/Auth/Register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/coverage",
                loader: () => fetch('/warehouses.json'),
                Component: Coverage,
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            }
        ]
    }
]);