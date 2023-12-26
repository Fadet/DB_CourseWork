import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider, RequireAuth} from "react-auth-kit";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage, LoginPage} from "./LoginPage";
import {Profile} from "./Profile";
import {ProfileInfo} from "./ProfileInfo";
import {Orders} from "./Orders";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authType={"cookie"}
                  authName={"_auth"}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "http:"}
    >
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}></Route>
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"/register"} element={<AuthPage/>}></Route>
                <Route path={"/profile"} element={<RequireAuth loginPath={"/login"}><Profile/></RequireAuth>}>
                    <Route path={"info"} element={<ProfileInfo/>}></Route>
                    <Route path={"orders"} element={<Orders/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
