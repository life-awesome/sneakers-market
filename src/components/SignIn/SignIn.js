import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";

const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
            })
            .catch(() => {
                alert('Неверный пароль')
                setPassword('')
            })
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: 460}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Авторизация</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type="submit" onClick={login}>
                                Войти
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                {/* eslint-disable-next-line no-restricted-globals */}
                <div className="w-100 text-center mt-2 pe ">
                   <Link to={'/signUp'}><span className="btn redirect"> Зарегистрировать аккаунт</span></Link>
                </div>
            </div>
        </Container>
    )
}
export default SignIn