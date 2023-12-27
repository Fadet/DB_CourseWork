import React, {createContext, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage, LoginPage} from "./LoginPage";
import App from "./App";
import {AuthProvider, RequireAuth} from "react-auth-kit";
import {Profile} from "./Profile";
import {ProfileInfo} from "./ProfileInfo";
import {Orders} from "./Orders";

export const UserOrdersDataContext = createContext(null);
export function MainComponent() {
    const [userOrdersData, setUserOrdersData] = useState(()=>{
        const saved = localStorage.getItem("user_orders_data");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    return (
        <AuthProvider authType={"cookie"}
                      authName={"_auth"}
                      cookieDomain={window.location.hostname}
                      cookieSecure={window.location.protocol === "http:"}
        >
        <BrowserRouter>
        <Routes>
            <Route path={"/login"} element={<LoginPage/>}></Route>
            <Route path={"/register"} element={<AuthPage/>}></Route>

                <Route path={"/"} element={<UserOrdersDataContext.Provider value={[userOrdersData, setUserOrdersData]}><App /></UserOrdersDataContext.Provider>}></Route>
                <Route path={"/profile"} element={<RequireAuth loginPath={"/login"}><UserOrdersDataContext.Provider value={[userOrdersData, setUserOrdersData]}><Profile/></UserOrdersDataContext.Provider></RequireAuth>}>
                    <Route path={"info"} element={<ProfileInfo/>}></Route>
                    <Route path={"orders"} element={<Orders/>}></Route>
                </Route>

        </Routes>
        </BrowserRouter>
        </AuthProvider>
    );
}