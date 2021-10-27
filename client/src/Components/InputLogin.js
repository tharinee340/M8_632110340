import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Facebook from '../Components/Facebook'
import {Row, Col, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './login/apiLogin';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'


const Container = styled.div`
    
`
const Image = styled.img`
    
`
const Left = styled.div`
    background-color: lightgray;
    width: 100%;
    height: 100vh;
`
const Right = styled.div`
    margin: 20%;
    padding: 5%;
    
    
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`
const Form = styled.div`
    width: 100%;
`
const Input = styled.input`
    width: 100%;
    margin: 0 0 20px 0;
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;
    
    
    
`
const Register = styled.p`
    font-size: 18px;
    color: gray;
    cursor: pointer;
    transition: 0.5s;
    text-align: center;
    margin-top: 20px;

    &:hover {
        color: black;
    }
`
const Error = styled.span`
    color: red;
    justify-content: center;
    display: flex;
    padding-top: 20px;
`


const InputLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();
    const { err } = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {email, password})
    }

    // const login = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:8080/auth/login', {
    //         email: email,
    //         password: password
    //     }).then((res) => {
    //         localStorage.setItem(`token`, res.data);
    //         history.push('/home')
    //     })
    // }

    useEffect(() => {
        axios.get('http://localhost:8080/auth/login').then((response) => {
            console.log(response)
        })
    })
    return (
        <Container>
            <Row>
                <Col md={7}>
                    <Left>
                        <Image src=""/>
                        </Left>
                </Col>
                <Col md={5}>
                    <Right>
                        <Form>
                            <Title>SIGN IN</Title>
                            <Input placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                            <Button variant="dark"
                                    style={{width: "100%", height: 45, borderRadius: 10, marginTop: 20}}
                                    onClick={handleLogin}
                                    >SIGN IN</Button>
                            <Facebook />
                            { err && <Error>Something went wrong</Error>}
                            <Link to="/register">
                            <Register>Register ?</Register>
                            </Link>
                        </Form>
                        
                        
                    </Right>
                </Col>
                
            </Row>
        </Container>
    )
}

export default InputLogin
