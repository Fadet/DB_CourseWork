import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
export function ShoppingCart({show, onHide}) {
    return (
        <Offcanvas show={show} onHide={onHide} placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={"mb-auto"}>
                Тут будут ваши товары.
            </Offcanvas.Body>
            <Button variant={"warning"} className={"m-3"}>Заказать</Button>
        </Offcanvas>
    );
}