import React from 'react'
import Navbar from '../Components/Navbar.js'
import Promotion from '../Components/Promotion.js'
import Slide from '../Components/Slide.js'
import styled from 'styled-components'
import Categories from '../Components/Categories.js'
import Products from '../Components/Products.js'


const Container = styled.div`
    margin: 2% 0;
`

const Home = () => {
    return (
        <div> 
            <Promotion/>
            <Navbar/>
            <Container>
                <Slide/>
            </Container>
            <Categories/>
            <Products />
            
                   
        </div>
    )
}

export default Home
