import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import {CartDataContext} from "./App";
import {getProduct} from "./ProtoAPI";
import {ShoppingCartItem} from "./ShoppingCartItem";
export function ShoppingCart({show, onHide}) {
    const [cartData, setCartData] = useContext(CartDataContext);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        localStorage.setItem("cart_data", JSON.stringify(cartData));
    }, [cartData]);

    console.log(cartData);

    return (
        <Offcanvas show={show} onHide={onHide} placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={"mb-auto"}>
                {cartData.length === 0 && <p>Тут будут ваши товары.</p>}
                {cartData.map((product) =>
                <ShoppingCartItem product={product}/>)}
                {/*<ShoppingCartItem product={{}}/>*/}

            </Offcanvas.Body>
            <Button variant={"warning"} className={"m-3"}>Заказать</Button>
        </Offcanvas>
    );
}