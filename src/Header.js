import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Button,
    Placeholder,
    Image,
    NavItem,
    NavbarText,
    NavLink
} from "react-bootstrap";
import logo from "./img/logo.svg"
import './Header.css';
import {CartDataContext, ShoppingCartContext, SignInSignUpContext} from "./App";
import {ProfileOverlay} from "./ProfileOverlay";
import {useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";


export function Header({categoriesInfo}) {
    const [showCart, setShowCart] = useContext(ShoppingCartContext);
    const [cartData, setCartData] = useContext(CartDataContext);
    const isSignIn = useIsAuthenticated();
    const navigate = useNavigate();
    const [showSignInSignUp, setShowSignInSignUp] = useContext(SignInSignUpContext);

    const authHandler = () => {
        if (isSignIn()) {
            navigate('/profile');
        }
        else {
            setShowSignInSignUp({...showSignInSignUp, signIn: true});
        }
    }

    const getTotalAmount = () => {
        let total = 0;
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].amount;
        }
        return total;
    };

    const [productsAmount, setProductsAmount] = useState(getTotalAmount);

    useEffect(() => {
        localStorage.setItem("cart_data", JSON.stringify(cartData));
        setProductsAmount(getTotalAmount());
    }, [cartData]);

    const categories = categoriesInfo.categoriesList;

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed={"top"}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt={""}
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Пивмаг
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="categories-nav"/>
                    <Navbar.Collapse id="categories-nav">
                        {categories !== undefined &&
                        <Nav className="me-auto">
                            <NavLink onClick={authHandler} className={"d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"}>Профиль</NavLink>
                            {categories.map((cat, index) =>
                                <NavDropdown title={cat.nameru} key={cat.id}>
                                    {cat.subcategoriesList.map(subcat =>
                                        <NavDropdown.Item key={subcat.id} href={'#'+subcat.nameen}>{subcat.nameru}</NavDropdown.Item>
                                    )}
                                </NavDropdown>)}
                        </Nav>}
                        {categories === undefined &&
                        <>
                            <Placeholder animation={"glow"} className={"me-auto d-md-flex d-none"}>
                                <Placeholder xs={12}/>
                                <Placeholder xs={12}/>
                                <Placeholder xs={12}/>
                                <Placeholder xs={12}/>
                                <Placeholder xs={12}/>
                            </Placeholder>
                            <Placeholder animation={"glow"} className={"me-auto d-md-none"}>
                                <Placeholder xs={10}/>
                                <Placeholder xs={10}/>
                                <Placeholder xs={10}/>
                                <Placeholder xs={10}/>
                                <Placeholder xs={10}/>
                            </Placeholder>
                        </>}
                    </Navbar.Collapse>
                    <div className={"d-none d-lg-flex"}>
                        <ProfileOverlay authHandler={authHandler}/>
                    </div>
                    <Button variant="warning" onClick={() => setShowCart(true)} className={"d-none d-lg-flex"}>
                        {'Корзина ' + (productsAmount > 0 ? productsAmount.toString() : '')}
                    </Button>
                </Container>
            </Navbar>
        </>
    );
}