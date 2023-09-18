import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface USER {
    uid: string;
    userName: string;
    password: string;
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: { uid: "", userName: "", password: "" },
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = { uid: "", userName: "", password: "" };
        },
        updateUserProfile: (state, action: PayloadAction<USER>) => {
            state.user.uid = action.payload.uid;
            state.user.userName = action.payload.userName;
            state.user.password = action.payload.password;
        },
    },
});

export const { login, logout, updateUserProfile } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
