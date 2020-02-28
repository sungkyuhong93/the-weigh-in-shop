// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(
//         cartItem => cartItem.productTitle === cartItemToAdd.productTitle
//     )

//     if(existingCartItem) {
//         return cartItems.map(() => {
//             return (
//                 cartItem.productTitle === cartItemToAdd.productTitle
//                 ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
//             )
//         })
//     }

//     return [...cartItems, {...cartItemToAdd, quantity: 1}]
// }