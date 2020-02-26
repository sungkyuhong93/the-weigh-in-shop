import { combineReducers } from 'redux';
//init state
const initialState = {
    isDarkMode: false,
    cartItems: []
};

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DARKMODE':
            return { ...state, isDarkMode: !state.isDarkMode };
        default:
            return state;
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, cartItems: [...state, action.payload] };
        default:
            return state;
    }
};



export default combineReducers({
    toggleDark: toggleReducer,
    cart: cartReducer
});