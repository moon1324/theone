import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import loginReducer from "./modules/login";

const rootReducer = combineReducers({
    login: loginReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Provider store={store}>
            <meta name="naver-site-verification" content="81adcc38375fbdf0d7f40db4c9ce9d6674e9b41e" />
            <App />
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
