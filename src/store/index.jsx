import { configureStore } from "@reduxjs/toolkit";
import AutherReducer from './slice/Auth';

export const store = configureStore({
    reducer: {
        auth: AutherReducer,
    }
})