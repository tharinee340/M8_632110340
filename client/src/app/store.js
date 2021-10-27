import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../Components/cart/reducers'
import userReducers from '../Components/login/reducers'

export default configureStore({
    reducer: {
        cart: cartReducers,
        user: userReducers,
    }
  });