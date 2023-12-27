import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";
import {useSignIn, useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";
import {doRegister, getLoginData} from "./ProtoAPI";

export function LoginPage() {
    const isSignIn = useIsAuthenticated();
    const signIn = useSignIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignIn()) {
            navigate("../");
        }
    });

    const submitHandler = (e) => {
        e.preventDefault();
        getLoginData(e.target.elements.login_email.value, e.target.elements.login_password.value).then(
            (res) => {
                if (signIn(
                    {
                    token: res.token,
                    tokenType: "Bearer",
                    expiresIn: res.lifetime,
                    authState: res.user}
                )) {
                    window.location.reload();
                }
            }
        )
    };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (signIn(
    //         {
    //             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3GEMA0IICOfFMVXY7kkTX1wr4qCyhIf58U",
    //             tokenType: "Bearer",
    //             expiresIn: 60 * 24 * 30,
    //             authState: {
    //                 name: "Гандон А.А.",
    //                 email: "eblan@mail.com",
    //                 tel: "88005553535"
    //             }
    //         }
    //     )) {
    //         window.location.reload();
    //     }
    // };


    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-warning-subtle"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-2">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Пивмаг</h2>
                                    <div className="mb-3">
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Логин
                                                </Form.Label>
                                                <Form.Control name={"login_email"} type="email"
                                                              placeholder="email@example.com" required/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Пароль</Form.Label>
                                                <Form.Control as={"input"}
                                                              pattern={"^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&?\"]).*$"}
                                                              name={"login_password"} type="password"
                                                              placeholder="Пароль"
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
                                                <a onClick={() => navigate('/register')}
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
                </Row>
            </Container>
        </div>
    );
}

export function AuthPage() {
    const isSignIn = useIsAuthenticated();
    const signIn = useSignIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignIn()) {
            navigate("../");
        }
    });

    const submitHandler = (e) => {
        e.preventDefault();
        doRegister(
            e.target.auth_email.value,
            e.target.auth_tel.value,
            e.target.auth_password.value
        ).then(
            (res) => {
                getLoginData(
                    e.target.auth_email,
                    e.target.auth_password).then(
                    (res) => {
                        if (signIn(
                            {
                                token: res.token,
                                tokenType: "Bearer",
                                expiresIn: res.lifetime,
                                authState: res.user
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
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-warning-subtle"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-2">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Пивмаг</h2>
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
                                                <Form.Control as={"input"}
                                                              pattern={"^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&?\"]).*$"}
                                                              name={"auth_password"} type="password"
                                                              placeholder="Пароль"
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
                                                <a onClick={() => navigate('/login')}
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
                </Row>
            </Container>
        </div>
    );
}