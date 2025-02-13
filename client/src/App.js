import "./App.css";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme from "./global/theme";
import GlobalStyle from "./global/global";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserStatus } from "./modules/login";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <GlobalStyle />
                <HelmetProvider>
                    <Helmet>
                        <meta name="naver-site-verification" content="81adcc38375fbdf0d7f40db4c9ce9d6674e9b41e" />
                        <meta name="title" content="더원공동체 Theone Community"></meta>
                        <meta name="description" content="전주 더온누리교회 청년 공동체 더원공동체 입니다"></meta>
                        {/* <meta property="og:url" content="https://redkiwiapp.com" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="RedKiwi, YouTube-based English Trainer" />
                        <meta
                            property="og:description"
                            content="How could you speak English if you cannot understand it? It's time to improve your English listening skills! Try RedKiwi right now :)"
                        />
                        <meta property="og:image" content="redkiwi.jpg" /> */}
                    </Helmet>
                </HelmetProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
