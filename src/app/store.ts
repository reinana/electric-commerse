import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";
import modalReducer from "../features/modal/ModalSlice";
import itemReducer from "../features/modal/ItemSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
        modal: modalReducer,
        item: itemReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
