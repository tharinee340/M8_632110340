import { createSlice } from '@reduxjs/toolkit'
// import { addCart } from './actions'

export const cartSlice =  createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addCartProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        }
    }
})

export const { addCartProduct } = cartSlice.actions
export default cartSlice.reducer;
