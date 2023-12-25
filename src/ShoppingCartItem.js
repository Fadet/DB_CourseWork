import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect} from 'react';
import {Button, CloseButton, Col, Image, Row} from "react-bootstrap";
import {CartDataContext} from "./App";

export function ShoppingCartItem({product}) {
    const [cartData, setCartData] = useContext(CartDataContext);

    useEffect(() => {
        localStorage.setItem("cart_data", JSON.stringify(cartData));
    }, [cartData]);

    const onAddHandler = () => {
        const res = cartData.findIndex((obj) => {return obj.id === product.id;});
        cartData[res].amount += 1;
        setCartData([...cartData]);
    };

    const onRemoveHandler = () => {
        const res = cartData.findIndex((obj) => {return obj.id === product.id;});
        if (cartData[res].amount === 1) {
            cartData.splice(res, 1);
        }
        else {
            cartData[res].amount -= 1;
        }
        setCartData([...cartData]);
    };

    const onDeleteHandler = () => {
        const res = cartData.findIndex((obj) => {return obj.id === product.id;});
        cartData.splice(res, 1);
        setCartData([...cartData]);
    };

    return (
            <Row className={"mb-2"} style={{backgroundColor: "white", borderRadius: "8px"}}>
                <Col xs={3} className={"pe-0"}>
                    <Image style={{height: "64px", width: "64px", objectFit: "contain"}} alt={""}
                           src={product.imageUrl}>
                    </Image>
                </Col>
                <Col className={"pe-0"}>
                    <Row className={"fw-semibold"}>
                        {product.name}
                    </Row>
                    <Row style={{width: "100%"}}>
                        <Col className={"align-items-center fst-italic"}
                             style={{textAlign: "left", padding: "10px 0 0 0", width: "100px"}}>
                            {product.price}
                        </Col>
                        <Col xs={5} className={"d-inline-flex justify-content-evenly"} style={{padding: "5px 0 0 0", backgroundColor: "lightyellow", borderRadius: "50px"}}>
                            <Button className={"pb-1"} style={{height: "25px", width: "25px", padding: "0", borderRadius: "15px"}}
                                    variant={"warning"} onClick={onRemoveHandler}>-</Button>
                            <p className={"m-0"}>{product.amount}</p>
                            <Button variant={"warning"} onClick={onAddHandler}
                                    style={{height: "25px", width: "25px", padding: "0", borderRadius: "15px"}}>+</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1} className={"p-0"}>
                    <CloseButton onClick={onDeleteHandler} className={"ms-1 mt-4"}/>
                </Col>
            </Row>
    );
}
