import React from 'react'
import styled from 'styled-components';
import { Button, Row, Col } from 'react-bootstrap'

const Container = styled.div`
    margin: 3% 5%;
`
const ImgContainer = styled.div`

    margin-right: 5%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Description = styled.p`
    width: 80%;

`
const Price = styled.p`
    color: #C73636;
    font-size: 20px;
    font-weight: 500;
    width: 80%;
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;

`
const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 ;
    width: 80%;
`
const Option = styled.div`
    display: flex;
    align-items: center;
`
const OptionTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`
const Quantity = styled.select`
    border-radius: 5px;
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid lightgray;
    transition: 0.5s;

    &:hover {
        border: 1px solid black;
    }

`
const OptionQuantity = styled.option` `
const Size = styled.select`
    border-radius: 5px;
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid lightgray;
    transition: 0.5s;

    &:hover {
        border: 1px solid black;
    }
`
const OptionSize = styled.option``
const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`
const Color = styled.div`   
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    margin: 0 0 0 10px;
    transition: 0.5s;
    /* border: 3px solid lightgray; */
    &:hover {
        width: 25px;
        height: 25px;
    }
`

const DetailProduct = () => {
    return (
        <Container>

            <Row>

                <Col md={6}>
                    <ImgContainer>
                        <Image src="https://pomelofashion.imgix.net/img/p/2/3/3/9/7/9/233979.jpg?auto=compress,format&fm=webp,jpg,png&w=739&q=55" />
                    </ImgContainer>

                </Col>

                <Col md={6}>
                    <InfoContainer>
                        <Title>Product</Title>
                        <Description>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. .</Description>
                        <Price>THB 2000</Price>

                        <ColorContainer>
                            <OptionTitle>Color</OptionTitle>
                            <Color color="#90cfa6" />
                            <Color color="#f6cf72" />
                        </ColorContainer>
                        <OptionContainer>
                            <Option>
                                <OptionTitle>Size</OptionTitle>
                                <Size>
                                    <OptionSize >XS</OptionSize>
                                    <OptionSize >S</OptionSize>
                                    <OptionSize >M</OptionSize>
                                    <OptionSize >L</OptionSize>
                                    <OptionSize >XL</OptionSize>
                                </Size>
                            </Option>
                            <Option>
                                <OptionTitle>Quantity</OptionTitle>
                                <Quantity>
                                    <OptionQuantity>1</OptionQuantity>
                                    <OptionQuantity>2</OptionQuantity>
                                    <OptionQuantity>3</OptionQuantity>
                                </Quantity>

                            </Option>
                        </OptionContainer>
                        <Button variant="dark" style={{ marginTop: "10%", width: "80%", height: 45 }}>ADD TO CART</Button>
                    </InfoContainer>
                </Col>

            </Row>




        </Container>
    )
}

export default DetailProduct
