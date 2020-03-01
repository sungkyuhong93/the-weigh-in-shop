import { combineReducers } from 'redux';
import { addItemToCart, removeItemFromCart, minusItem } from "./cart.utils";

//init state
const initialState = {
    isDarkMode: true,
    cartItems: [],
    cartToggle: false
};


const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DARKMODE':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };
        default:
            return state;
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case 'MINUS_ITEM':
            return {
                ...state,
                cartItems: minusItem(state.cartItems, action.payload)
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case "CART_TOGGLE":
            return {
                ...state,
                cartToggle: !state.cartToggle
            };
        default:
            return state;
    }
};



export default combineReducers({
    toggle: toggleReducer,
    cart: cartReducer
});