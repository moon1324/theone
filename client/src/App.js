import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./global/global";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <GlobalStyle />
        </>
    );
}

export default App;
