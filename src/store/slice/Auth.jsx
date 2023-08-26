import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            console.log(state.user);
        }
    }
})

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;