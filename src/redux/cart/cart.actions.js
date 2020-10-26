// se ocupa de partea de adauga iteme in cos
import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

// defini actiunea de a aduga
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
