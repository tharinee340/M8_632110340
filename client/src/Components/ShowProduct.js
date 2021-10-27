import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Info = styled.div`
    text-align: center;
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.2);

    &:hover {
        opacity: 1;
    }
    
`
const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    
    
    
`
const Image = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const Icon = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    transition: 0.5s;

    &:hover{
        background-color: black;
        color: white;
    }
    


`


const ShowProduct = ({product}) => {
    return (
        <> 
                <Col md={3}>
                    <ImageContainer>
                        <Image src={product.img}/>
                        <Info>
                            <Link to={`/detail/${product._id}`}>
                            <Icon><SearchIcon/></Icon>
                            </Link>
                            <Icon><ShoppingCartOutlinedIcon/></Icon>
                        </Info>
                    </ImageContainer>
                </Col>
        </>
    )
}

export default ShowProduct
