import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Suggestion from "../pages/suggestion/Suggestion";
import PageNotFound from "../pages/error/PageNotFound";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/suggestion",
                element: <Suggestion />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
