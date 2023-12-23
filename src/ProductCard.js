import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {CartDataContext} from "./App";

export function ProductCard({product}) {
    const [cartData, setCartData] = useContext(CartDataContext);


    useEffect(() => {
        localStorage.setItem("cart_data", JSON.stringify(cartData));
    }, [cartData]);

    const onClickHandler = () => {

        const res = cartData.findIndex((obj) => {return obj.id === product.id;});
        if (res === -1)
            setCartData([...cartData, {...product, amount: 1}]);
        else
        {
            cartData[res].amount += 1;
            setCartData([...cartData]);
        }
    };

    return (
        <Card style={{ width: '18.75rem'}} className={"me-4 ms-3 ms-md-0"}>
            <Card.Img variant="top" src={product.imageUrl} style={{height: "15rem",  objectFit: "contain",}}/>
            <Card.Body className={""}>
                <Card.Title className={"text-start mb-3"}>{product.name}</Card.Title>
                <Card.Text as={"div"} className={"text-start"}>
                    <div className={"justify-content-between d-flex"}>
                        <div className={"pt-2 fw-semibold"}>
                            {product.price}
                        </div>
                        <Button onClick={onClickHandler} style={{width: "100px", borderRadius: "20px"}} variant={"warning"}>Выбрать</Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}