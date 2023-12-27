import React, {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthUser, useSignOut} from "react-auth-kit";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "./img/logo.svg";
import {Link, Outlet, useNavigate} from "react-router-dom";
import background from "./img/background.jpg";
import './Profile.css';

export function Profile() {
    const signOut = useSignOut();
    const navigate = useNavigate();
    const data = useAuthUser();

    useEffect(()=>navigate("/profile/info"), []);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed={"top"}>
                <Container>
                    <Navbar.Brand className={"hed"} onClick={()=>navigate('/')}>
                        <img
                            alt={""}
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Пивмаг
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="profile-nav"/>
                    <Navbar.Collapse id="profile-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <Link className={"mt-2 mb-2 me-lg-3"} style={{color: "#575757", textDecoration: "none"}} to={"/profile/info"}><div>Аккаунт</div></Link>
                            <Link className={"mt-2 mb-2 me-lg-3"} style={{color: "#575757", textDecoration: "none"}} to={"/profile/orders"}><div>Заказы</div></Link>
                            <NavLink className={"mt-2 mb-2 d-flex p-0"} onClick={() => {
                                signOut();
                                window.location.reload();
                            }}>Выйти</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                marginTop: "-30px",
                marginBottom: "-30px",
            }}>
            <Container style={{marginTop: "80px", backgroundColor: "white", height: "100vh"}}>
                    <Outlet/>
            </Container>
            </div>
        </>
    )
}