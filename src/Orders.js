import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthUser} from "react-auth-kit";

export function Orders() {
    const userData = useAuthUser();

    return (
        <>
            <h1>BIMBIMBAMBAM</h1>
        </>
    )
}