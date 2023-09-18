import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: {
        id: 0,
        category: "",
        itemName: "",
        price: 0,
        image: "",
        description: "",
        amount: 0,
        favorite: false
    }
}

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        setCurrentItem: (state, action) => {
            state.item = action.payload
        }
    },
});

export const { setCurrentItem } = itemSlice.actions;

export default itemSlice.reducer;