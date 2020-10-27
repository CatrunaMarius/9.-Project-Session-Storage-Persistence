import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist';
import storage  from 'redux-persist/lib/storage'


import userReducer from './user/user.reducer';
import cartReaducer from './cart/cart.reducer';

// stocare locala
const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReaducer
})

export default persistReducer(persistConfig, rootReducer);