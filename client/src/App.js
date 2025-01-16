import "./App.css";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme from "./global/theme";
import GlobalStyle from "./global/global";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserStatus } from "./modules/login";

function App() {
    // const currentUser = useSelector((state) => state.login.currentUser);
    // const userStatus = useSelector((state) => state.login.userStatus);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const isAuthenticate = async () => {
    //         const response = await fetch("http://localhost:8000/user/auth", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });
    //         if (!response.ok) {
    //             return;
    //         }
    //         const getAuthenticate = await response.json();
    //         return getAuthenticate;
    //     };

    //     isAuthenticate()
    //         .then((res) => {
    //             console.log(res);
    //             let { message, ...user } = res;
    //             dispatch(setUser(user));
    //             dispatch(setUserStatus(true));
    //         })
    //         .catch(console.error);
    // }, [dispatch]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}

export default App;
