import {Col, Button, Card, Form, Modal, ModalHeader} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import {useSignIn} from "react-auth-kit";
import {doRegister, getLoginData} from "./ProtoAPI";

export function Login(props) {
    const signIn = useSignIn();

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     getLoginData(e.target.login_email, e.target.login_password).then(
    //         (res) => {
    //             if (signIn(
    //                 {
    //                 token: res.token,
    //                 expiresIn: res.lifetime,
    //                 authState: {
    //                     name: "Гандон А.А.", // TODO: Влад не доделал инфу
    //                     email: "eblan@mail.com",
    //                     tel: "88005553535"
    //                 }
    //             )) {
    //                 window.location.reload();
    //             }
    //         }
    //     )
    // };

    const submitHandler = (e) => {
        e.preventDefault();
        if (signIn(
            {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3GEMA0IICOfFMVXY7kkTX1wr4qCyhIf58U",
                tokenType: "Bearer",
                expiresIn: 60 * 24 * 30,
                authState: {
                    name: "Гандон А.А.",
                    email: "eblan@mail.com",
                    tel: "88005553535"
                }
            }
        )) {
            window.location.reload();
        }
    };

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={"d-flex"}
            >
                <Col md={8} lg={6} xs={12} className={"my_col"}>
                    <div className="border border-5 border-warning-subtle"
                         style={{marginBottom: "-6px", borderRadius: "5px"}}></div>
                    <Card className="shadow">
                        <ModalHeader closeButton>
                            <h2 className="fw-bold mb-2 text-uppercase ">ПИВМАГ</h2>
                        </ModalHeader>
                        <Card.Body>
                            <div className="mb-3 mt-md-2">
                                <div className="mb-3">
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Логин
                                            </Form.Label>
                                            <Form.Control name={"auth_email"} type="email"
                                                          placeholder="email@example.com" required/>
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Пароль</Form.Label>
                                            <Form.Control as={"input"} pattern={"^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&?\"]).*$"}
                                                          name={"login_password"} type="password" placeholder="Пароль"
                                                          required/>
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button variant="warning" type="submit">
                                                Войти
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0 text-center">
                                            Еще нет аккаунта?{" "}
                                            <a onClick={props.showauth}
                                               className="text-warning-emphasis fw-bold my_a">
                                                Регистрация
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Modal>
        </div>
    );
}

export function Auth(props) {
    const signIn = useSignIn();

    const submitHandler = (e) => {
        e.preventDefault();
        doRegister(
            e.target.auth_email,
            e.target.auth_tel,
            e.target.auth_password
        ).then(
            (res) => {
                getLoginData(
                    e.target.auth_email,
                    e.target.auth_password).then(
                    (res) => {
                        if (signIn(
                            {
                                token: res.token,
                                expiresIn: res.lifetime,
                                authState: { // TODO: Влад не доделал инфу
                                    name: "Гандон А.А.",
                                    email: "eblan@mail.com",
                                    tel: "88005553535"
                                }
                            }
                        )) {
                            window.location.reload();
                        }
                    }
                )
            }
        )
    };

    return (
        <div className={"d-flex align-items-center justify-content-center"}>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={"d-flex"}
            >
                <Col md={8} lg={6} xs={12} className={"my_col"}>
                    <div className="border border-5 border-warning-subtle"
                         style={{marginBottom: "-6px", borderRadius: "5px"}}></div>
                    <Card className="shadow">
                        <ModalHeader closeButton>
                            <h2 className="fw-bold mb-2 text-uppercase ">ПИВМАГ</h2>
                        </ModalHeader>
                        <Card.Body>
                            <div className="mb-3 mt-md-2">
                                <div className="mb-3">
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Логин
                                            </Form.Label>
                                            <Form.Control name={"auth_email"} type="email"
                                                          placeholder="email@example.com" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicTel">
                                            <Form.Label className="text-center">
                                                Номер телефона
                                            </Form.Label>
                                            <Form.Control as={"input"} pattern={"[+]7[0-9]{10}"} name={"auth_tel"} type="text" placeholder="+79997777777"
                                                          required/>
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Пароль</Form.Label>
                                            <Form.Control as={"input"} pattern={"^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&?\"]).*$"} name={"auth_password"} type="password" placeholder="Пароль"
                                                          required/>
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button variant="warning" type="submit">
                                                Войти
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Уже есть аккаунт?{" "}
                                            <a onClick={props.showlogin}
                                               className="text-warning-emphasis fw-bold my_a">
                                                Вход
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Modal>
        </div>
    );
}