import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {regUser} from "./registerUser";

const SignUp = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')
    const navigation = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (registerPassword !== registerPasswordConfirm) {
            setRegisterPassword('')
            setRegisterPasswordConfirm('')
            alert("Пароли не совпадают")
            return
        }
        regUser(registerEmail, registerPassword)
            .then(() => navigation('/'))
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: 460}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Регистрация</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={e => setRegisterEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" required value={registerPassword}
                                              onChange={e => setRegisterPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Подтверждение пароля</Form.Label>
                                <Form.Control type="password" required
                                              onChange={e => setRegisterPasswordConfirm(e.target.value)}
                                              value={registerPasswordConfirm}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type="submit" onClick={submitHandler}>
                                Зарегистрироваться
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    <Link to='/'><span className="btn redirect">Уже есть аккаунт для входа?</span></Link>
                </div>
            </div>
        </Container>
    )
}
export default SignUp