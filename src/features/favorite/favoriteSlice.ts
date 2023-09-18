import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { itemList } from "../../itemData";

const initialState = {
    favoriteItems: itemList
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        clearFavorite: (state) => {
            return {
                favoriteItems : itemList
            }
        },
        toggleFavorite : (state, action) => {
            const favoriteItem = state.favoriteItems.find((item) => item.id === action.payload)
            if (favoriteItem !== undefined) {
                favoriteItem.favorite = !favoriteItem.favorite;
            }
        },

    },
});

export const { clearFavorite, toggleFavorite } = favoriteSlice.actions;
export const selectfavorite = (state: RootState) => state.favorite.favoriteItems;
export default favoriteSlice.reducer;
