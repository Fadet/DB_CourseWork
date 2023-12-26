import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthUser} from "react-auth-kit";
import {Card, CardFooter, Col, Image, Row} from "react-bootstrap";
import mascot from './img/mascot.jpg';

export function ProfileInfo() {
    const userData = useAuthUser();

    return (
        <div className={"justify-content-center d-flex align-items-center h-100"}>
            <Card style={{ width: '18rem' }}>
                <Card.Header className={"bg-warning"}>
                    <Card.Title style={{textAlign: "center"}}>Это вы</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={mascot} />
                <Card.Header>
                    <Card.Title>Email: <i>{userData().email}</i></Card.Title>
                </Card.Header>
                <CardFooter>
                    <Card.Title>
                        Телефон: <u>{userData().tel}</u>
                    </Card.Title>
                </CardFooter>
            </Card>
        </div>

)
}
