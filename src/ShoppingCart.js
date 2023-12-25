import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Offcanvas} from "react-bootstrap";
import {CartDataContext, SignInSignUpContext} from "./App";
import {ShoppingCartItem} from "./ShoppingCartItem";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export function ShoppingCart({show, onHide}) {
    const [cartData, setCartData] = useContext(CartDataContext);
    const [showSignInSignUp, setShowSignInSignUp] = useContext(SignInSignUpContext);
    const isSignIn = useIsAuthenticated();

    const getTotalAmount = () => {
        let total = 0;
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].amount;
        }
        return total;
    };

    const getTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].amount * cartData[i].price.slice(0, -4);
        }
        return total.toString() + " RUB";
    };

    const orderHandler = () => {
        if (isSignIn()) {
            window.alert("Unimplemented");
        }
        else {
            setShowSignInSignUp({...showSignInSignUp, signIn: true});
        }
    }

    const [productsAmount, setProductsAmount] = useState(getTotalAmount);
    const [totalPrice, setTotalPrice] = useState(getTotalPrice);

    useEffect(() => {
        localStorage.setItem("cart_data", JSON.stringify(cartData));
        setProductsAmount(getTotalAmount());
        setTotalPrice(getTotalPrice());
    }, [cartData]);

    return (
        <Offcanvas show={show} onHide={onHide} placement={"end"}>
            <Offcanvas.Header closeButton style={{backgroundColor: "#F3F3F7"}}>
                <Offcanvas.Title className={"fw-bold"}>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={"mb-auto pt-0"} style={{backgroundColor: "#F3F3F7"}}>
                {cartData.length === 0 && <p>Тут будут ваши товары.</p>}
                {cartData.map((product) =>
                <ShoppingCartItem key={product.id} product={product}/>)}

            </Offcanvas.Body>

            {cartData.length !== 0 &&
                <>
                    <Container style={{padding: "0 1rem 0 1rem", marginTop: "10px"}}>
                        {"Товаров: " + productsAmount.toString()}
                        <hr/>
                        <div className={"d-flex justify-content-between fw-semibold"}>
                            <p>Итоговая стоимость</p>
                            {totalPrice}
                        </div>
                    </Container>
                    <Button variant={"warning"} className={"m-3 mt-1"} onClick={orderHandler}>Заказать</Button>
                </>
            }

        </Offcanvas>
    );
}