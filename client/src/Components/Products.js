import React from 'react'
import styled from 'styled-components'
import { products } from '../asset/data'
import ShowProduct from './ShowProduct'
import {Row} from 'react-bootstrap';

const ContainerSide = styled.div`
    margin: 0 5%;
`
const Title = styled.h1`
    margin-top:40px;
    margin-bottom: 20px;
    
`
const Container = styled.div`
`

const Products = () => {
    return (
        <>
        <ContainerSide>
        <Title>RECOMEND</Title>
        
            <Container>
                <Row>

              {products.map(product => (
                 <ShowProduct product={product} key={product.id}/>
               ))}
          
                </Row>
            </Container>
        </ContainerSide>  
        
        </>
    )
}

export default Products
