import React, { useState } from 'react'
import styled from 'styled-components'
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory , Link} from 'react-router-dom';

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
const Login = styled.p`
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

const InputRegister = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const addUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/auth/register', {
            name: name,
            email: email,
            password: password
        })
        history.push('/login')
    }
    return (
        <Container>
            <Row>
                <Col md={7} sm={6}>
                    <Left>
                        <Image src=""/>
                    </Left>
                </Col>
                <Col md={5} sm={6}>
                    <Right>
                        <Form>
                            <Title>SIGN UP</Title>
                            <Input placeholder="Name"  onChange={(e) => setName(e.target.value)}/>
                            <Input placeholder="Email address"  onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                            <Button variant="dark" style={{width: "100%", height: 45, borderRadius: 10, marginTop: 20}} onClick={addUser}>SIGN UP</Button>
                            <Link to="/login" style={{textDecoration: "none"}}><Login>Already have account ?</Login></Link>
                        </Form>
                        
                        
                    </Right>
                </Col>
                
            </Row>
        </Container>
    )
}

export default InputRegister
