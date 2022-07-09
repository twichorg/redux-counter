import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
     }
});

