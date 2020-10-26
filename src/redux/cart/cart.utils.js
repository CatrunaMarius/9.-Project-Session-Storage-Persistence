// folosi pentru a grupa toate itemel intr-un array
 export const addItemToCart = (cartItems, cartItemsToAdd) =>{
    //  gaseste primul item in array in functie de conditie
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
        );

    // verificam daca exista itemul
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    // daca nu exista CartItem atunci vom return un nou array cu toate cartItem care exista acolo si un obiect
    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
 }