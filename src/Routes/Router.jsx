import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login/login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import Privateroutes from "./Privateroutes";
import SendPercel from "../pages/SendPercel/SendPercel";


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
            },
            {

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
            },
            {
                path: "/rider",
                element: <Privateroutes>
                    <Rider></Rider>
                </Privateroutes>
            },
            {
                path: "/sendparcel",
                element: <Privateroutes>
                    <SendPercel></SendPercel>
                </Privateroutes>
            }
        ]
    }
]);