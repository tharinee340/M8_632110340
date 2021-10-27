import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
//เหมือนกับเราตั้ง className แล้วใส่ styled แต่เป็น component แทนจะได้เรียกได้ทุกที่และง่ายกว่า
const Container = styled.div`
    height: 60px;
    //background-color: #ecebeb;
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid lightgrey;
    @media only screen and (max-width:380px){
        display: none
    }
`
//ครอบพวกปุ่มใน navbar ใ้ช้จัดเรียงให้มัน flex && space-between
const Wrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

//ให้มันห่างเท่ากัน
const Left = styled.div`
    flex: 1;  
    display: flex ;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #ffffff;
`
//ใส่ตัว input text เข้าไป
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h2`
    margin: 0;
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItemRight = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`
const MenuItemLeft = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    
    
`
const Navbar = () => {
    //เอาค่า initialstate ของ quantity มา จากredux
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)

    return (
        <Container>
            <Wrapper>
               <Left>
                <Link to={'/home'} style={{textDecoration: "none", color: "gray"}}>
               <MenuItemLeft>HOME</MenuItemLeft>
                </Link>
                   <SearchContainer>
                       <Input placeholder="Search.."/>
                       <SearchIcon style={{color: "gray", fontSize: 18}}/>
                   </SearchContainer>
               </Left>
               <Center>
                   <Logo>SUPERB.</Logo>
               </Center>
               <Right>
                   <MenuItemRight>REGISTER</MenuItemRight>
                   <MenuItemRight>SIGN IN</MenuItemRight>
                   <Link to={'/cart'}>
                   <MenuItemRight>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                   </MenuItemRight>
                   </Link>
               </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
