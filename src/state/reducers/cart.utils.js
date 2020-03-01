export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.productTitle === cartItemToAdd.productTitle
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return (
                cartItem.productTitle === cartItemToAdd.productTitle
                    ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const minusItem = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.productTitle === cartItemToReduce.productTitle
    )

    if (existingCartItem.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.productTitle !== cartItemToReduce.productTitle)
    }


    return cartItems.map((cartItem) => {
        return (
            cartItem.productTitle === cartItemToReduce.productTitle
                ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
    })


    return [...cartItems, { ...cartItemToReduce, quantity: - 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.productTitle === cartItemToRemove.productTitle
    )

    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem !== cartItemToRemove)
    }
}