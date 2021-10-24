import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Navbar from '../Components/Navbar'
import CartProduct from '../Components/CartProduct'
import Promotion from '../Components/Promotion.js'

const Cart = () => {
    return (
        <>
            <Promotion/>
            <Navbar/>
            <Breadcrumb/>
            {/* <CartProduct/> */}
            <CartProduct/>
            
        </>
    )
}

export default Cart
