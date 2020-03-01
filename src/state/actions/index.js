//toggle dark mode
export const toggleDarkMode = () => ({
    type: 'TOGGLE_DARKMODE'
});

export const cartToggle = () => ({
    type: "CART_TOGGLE"
})

export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item
});


export const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item
});

export const minusItem = item => ({
    type: "MINUS_ITEM",
    payload: item
});



