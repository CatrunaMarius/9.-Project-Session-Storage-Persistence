import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReaducer from './cart/cart.reducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReaducer
})