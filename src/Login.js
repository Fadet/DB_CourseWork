import {Col, Button, Card, Form, Modal, ModalHeader} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {doRegister, getLoginData} from "./ProtoAPI";

export function Login(props) {
    const signIn = useSignIn();

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     getLoginData(e.target.login_name, e.target.login_password).then(
    //         (res) => {
    //             if (signIn(
    //                 {
    //                     auth: {
    //                     token: res.token,
    //                 },
    //                     userState: { // TODO: Влад не доделал инфу
    //                         name: "Гандон А.А.",
    //                         email: "eblan@mail.com",
    //                         tel: "88005553535"
    //                     }
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
                auth: {
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM0NTM0NTM0NTV9.EcbJSb_VUzK2dWyDt69Hh2nCjTmjb1uD_3Cq4Awq8D8",
                },
                userState: {
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
                            <div className="mb-3 mt-md-4">
                                <div className="mb-3">
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Имя пользователя
                                            </Form.Label>
                                            <Form.Control name={"login_name"} type="text" placeholder="Логин" required/>
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Пароль</Form.Label>
                                            <Form.Control name={"login_password"} type="password" placeholder="Пароль"
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
                                            Еще нет аккаунта?{" "}
                                            <a href={"#?"} onClick={props.showauth}
                                               className="text-warning-emphasis fw-bold">
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
            e.target.auth_name,
            e.target.auth_email,
            e.target.auth_tel,
            e.target.auth_password
        ).then(
            (res) => {
                getLoginData(
                    e.target.auth_name,
                    e.target.auth_password).then(
                    (res) => {
                        if (signIn(
                            {
                                auth: {
                                    token: res.token,
                                },
                                userState: { // TODO: Влад не доделал инфу
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
                                        <Form.Group className="mb-3" controlId="formBasicLogin">
                                            <Form.Label className="text-center">
                                                Имя пользователя
                                            </Form.Label>
                                            <Form.Control name={"auth_login"} type="text" placeholder="Логин" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Электронная почта
                                            </Form.Label>
                                            <Form.Control name={"auth_email"} type="email"
                                                          placeholder="email@example.com" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicTel">
                                            <Form.Label className="text-center">
                                                Номер телефона
                                            </Form.Label>
                                            <Form.Control name={"auth_tel"} type="tel" placeholder="+79997777777"
                                                          pattern={"+7[0-9]{10}"} required/>
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Пароль</Form.Label>
                                            <Form.Control name={"auth_password"} type="password" placeholder="Пароль"
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
                                            <a href={"#?"} onClick={props.showlogin}
                                               className="text-warning-emphasis fw-bold">
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