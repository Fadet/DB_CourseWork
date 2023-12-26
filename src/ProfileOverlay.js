import React, {useContext,} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,} from "react-bootstrap";
import './ProfileOverlay.css';
import account from './img/account.svg';
import {SignInSignUpContext} from "./App";
import {useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";

export function ProfileOverlay({authHandler}) {
    return (
        <div className={"me-3"}>

            <Image
                className={"overlay-img"}
                onClick={authHandler}
                roundedCircle
                width={"35px"}
                height={"35px"}
                src={account}
            />
        </div>
    );
}