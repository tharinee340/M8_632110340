import React from 'react'
import styled from 'styled-components'
import Facebook from '../Components/Facebook'
import {Row, Col, Button} from 'react-bootstrap';
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


const InputLogin = () => {
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
                            <Input placeholder="Email address"/>
                            <Input placeholder="Password"/>
                            <Button variant="dark" style={{width: "100%", height: 45, borderRadius: 10, marginTop: 20}}>SIGN IN</Button>
                            <Facebook />
                            <Register>Register ?</Register>
                        </Form>
                        
                        
                    </Right>
                </Col>
                
            </Row>
        </Container>
    )
}

export default InputLogin
