import { combineReducers } from 'redux';

//init state
const initialState = {
    isDarkMode: true,
    cartItems: [],
    cartOpen: false
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
                cartItems: [...state.cartItems, action.payload] 
            };
        case "CART_OPEN":
            return {
                ...state,
                cartOpen: !state.cartOpen
            }
        default:
            return state;
    }
};



export default combineReducers({
    toggle: toggleReducer,
    cart: cartReducer
});