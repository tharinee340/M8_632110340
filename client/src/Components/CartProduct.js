import React from 'react'
import styled from 'styled-components'
import {Button, Row, Col} from 'react-bootstrap'

const Container = styled.div`
    margin: 0 5% 5% 5%;
`
const LeftSite = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid lightgray;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`
const Price = styled.h3`
    color: #C73636;
    font-weight: 600;
`
const Name = styled.p`
    font-size: 18px;
`
const Size = styled.span`
    margin-right: 10px;
`
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-bottom: 20px;
`
const Quantity = styled.span`
    margin-right: 10px;
`
const QuantitySelect = styled.select`
    padding: 5px;
    border-radius: 5px;
`
const QuantityOption = styled.option``
const Summary = styled.div`
    background-color: #F4F1F1;
    padding: 30px;
    border-radius: 5px;
`
const SummaryTitle = styled.h2` 
    margin-bottom: 40px;
    font-weight: bold;
`
const SummaryText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const SummaryPrice = styled.p`
    display: flex;
    justify-content: end;
    font-size: 18px;
    font-weight: bold;
`
const TotalText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const TotalPrice = styled.p`
    display: flex;
    justify-content: end;
    font-size: 18px;
    font-weight: bold;
`
const Subtotal = styled.div`
    padding-bottom: 40px;
    border-bottom: 1px solid lightgray;
`
const Total = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
`
const Delete = styled.p`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    color: #C73636;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: red;
    }

`
const CartProduct = () => {
    return (
        <Container>
            <Row>
                <Col md={8} sm={12}>
                    <LeftSite>
                    <Row>
                        <Col md={4}>
                            <Image src="https://img.ltwebstatic.com/images3_pi/2020/09/14/1600047788718ea987b6c4f1506fae228aad6f166b.webp"/>
                        </Col>
                        <Col md={8} style={{height: "100%"}}>
                            <Price>THB 5200</Price>
                            <Name>T-shirt for woman</Name>
                            <Color color="#f6cf72"/>
                            <Row>
                                <Col md={5}>
                                    <Size>Size :</Size> S
                                </Col>
                                <Col md={3}>
                                    <Quantity>Quantity :</Quantity>
                                    <QuantitySelect >
                                        <QuantityOption>1</QuantityOption>
                                        <QuantityOption>2</QuantityOption>
                                        <QuantityOption>3</QuantityOption>
                                    </QuantitySelect>
                                </Col>
                                
                            </Row>
                        <Delete>Remove this item</Delete>
                        </Col>
                    </Row>
                    
                    </LeftSite>
                </Col>
                <Col md={4} sm={12}>
                    <Summary>
                        <SummaryTitle>SUMMARY</SummaryTitle>
                        <Subtotal>
                            <Row g={3}>
                                <Col>
                                    <SummaryText>Sub total</SummaryText>
                                </Col>
                                <Col >
                                    <SummaryPrice>THB 2500</SummaryPrice>
                                </Col>
                            </Row>
                        </Subtotal>
                        <Total>
                            <Row g={3}>
                                <Col>
                                    <TotalText>Total</TotalText>
                                </Col>
                                <Col >
                                    <TotalPrice>THB 2500</TotalPrice>
                                </Col>
                            </Row>
                        </Total>
                        <Button variant="dark" style={{width: "100%", height: 45}}>CHECKOUT</Button>
                    </Summary>

                </Col>
            </Row>
        </Container>
    )
}

export default CartProduct
