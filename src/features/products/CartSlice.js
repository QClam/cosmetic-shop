import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        totalItems: 0,
        status: 'idle',
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalItems = 0;
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;