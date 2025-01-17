import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Suggestion from "../pages/suggestion/Suggestion";
import PageNotFound from "../pages/error/PageNotFound";
import Login from "../pages/login/Login";
import KakaoRedirect from "../pages/login/KakaoRedirect";
import SuggestionPost from "../pages/suggestion/SuggestionPost";
import SuggestionWrite from "../pages/suggestion/SuggestionWrite";

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
            {
                path: "/suggestion/:suggestionId",
                element: <SuggestionPost />,
            },
            {
                path: "/suggestion/write",
                element: <SuggestionWrite />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/oauth/kakao",
        element: <KakaoRedirect />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
