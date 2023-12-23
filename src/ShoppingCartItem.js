import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Button, CloseButton, Col, Image, Row} from "react-bootstrap";

export function ShoppingCartItem({product}) {


    return (
        <Row className={"mb-3"}>
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
                                variant={"warning"}>-</Button>
                        <p className={"m-0"}>{product.amount}</p>
                        <Button variant={"warning"}
                                style={{height: "25px", width: "25px", padding: "0", borderRadius: "15px"}}>+</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={1} className={"p-0"}>
                <CloseButton className={"ms-1 mt-4"}/>
            </Col>
        </Row>
    );
}
