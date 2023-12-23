import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useState} from 'react';
import {Container, Navbar, Nav, NavDropdown, Button, Placeholder} from "react-bootstrap";
import logo from "./img/logo.svg"
import {ShoppingCart} from "./ShoppingCart";
import './Header.css';
import {CartDataContext} from "./App";


export function Header({categoriesInfo}) {
    const [showCart, setShowCart] = useState(false);
    const [cartData, setCartData] = useContext(CartDataContext);

    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);

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
                    <Button variant="warning" onClick={handleShow} className={"d-none d-lg-flex"}>
                        {'Корзина ' + (cartData.length > 0 ? cartData.length.toString() : '')}
                    </Button>
                </Container>
            </Navbar>
            <ShoppingCart show={showCart} onHide={handleClose}></ShoppingCart>
        </>
    );
}