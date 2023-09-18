import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { itemList } from "../../itemData";

interface Item {
    id: number;
    category: string;
    itemName: string;
    price: number;
    image: string;
    description: string;
    amount: number;
}

// 買い物かごの書記か
const initialState = {
    cartItems: itemList
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            return {
                cartItems : itemList
            }
        },
        removeItem : (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            if (cartItem !== undefined) {
                cartItem.amount = 0;
            }
        },
        addItem : (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            if (cartItem !== undefined) {
                cartItem.amount = 1;
            }
        },
        
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            if (cartItem !== undefined) {
                cartItem.amount += 1; 
            }
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            if (cartItem !== undefined) {
                cartItem.amount -= 1; 
            }
        },
    },
});

export const { clearCart, removeItem, addItem, increase, decrease } = cartSlice.actions;
export const selectcart = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
