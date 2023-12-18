import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Container, Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import logo from "./img/logo.svg"
import {ShoppingCart} from "./ShoppingCart";
import './Header.css';
import {CategoryClient} from './proto/proto/v1/category_grpc_web_pb';
import {Empty} from "google-protobuf/google/protobuf/empty_pb"
// import {CategoryGetAllResponce} from './proto/proto/v1/category_pb';

export function Header() {
    const [showCart, setShowCart] = useState(false);

    const empt = new Empty();
    const client = new CategoryClient('http://localhost:5023');

    client.getAll(empt,{},(err, response) => {console.log(response)});

    const categories = [
        {nameRu: "Еда", id: 1, subcategories: [{nameRu: "Шашлык", id: 4}, {nameRu: "Хинкали", id: 5}]},
        {nameRu: "Напитки", id: 2, subcategories: [{nameRu: "Пиво", id: 6}, {nameRu: "Коньяк", id: 7}]},
        {nameRu: "Закуски", id: 3, subcategories: [{nameRu: "Чипсы", id: 8}, {nameRu: "Орехи", id: 9}]},
    ];

    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);


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
                        <Nav className="me-auto">
                            {categories.map((cat, index) =>
                                <NavDropdown title={cat.nameRu} key={cat.id}>
                                    {cat.subcategories.map(subcat =>
                                        <NavDropdown.Item key={subcat.id}>{subcat.nameRu}</NavDropdown.Item>
                                    )}
                                </NavDropdown>)}
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant="warning" onClick={handleShow} className={"d-none d-lg-flex"}>
                        Корзина
                    </Button>
                </Container>
            </Navbar>
            <ShoppingCart show={showCart} onHide={handleClose}></ShoppingCart>
        </>
    );
}