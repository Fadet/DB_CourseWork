import React, {useContext, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,} from "react-bootstrap";
import './ProfileOverlay.css';
import account from './img/account.svg';
import {SignInSignUpContext} from "./App";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export function ProfileOverlay() {
    const target = useRef(null);
    const [showSignInSignUp, setShowSignInSignUp] = useContext(SignInSignUpContext);
    const isSignIn = useIsAuthenticated();

    const authHandler = () => {
        if (isSignIn()) {
            window.alert("Unimplemented");
        }
        else {
            setShowSignInSignUp({...showSignInSignUp, signIn: true});
        }
    }

    return (
        <div className={"me-3"}>

            <Image
                className={"overlay-img"}
                ref={target}
                onClick={authHandler}
                roundedCircle
                width={"35px"}
                height={"35px"}
                src={account}
            />
        </div>
    );
}