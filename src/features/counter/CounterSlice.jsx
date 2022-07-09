import { createSlice } from '@reduxjs/toolkit'

    const initialState = {  
        count: 0    // initial state
    }

    const counterSlice = createSlice({  // createSlice is a function that takes in a name and initial state
        name: 'counter',                    
        initialState,   
        reducers: {
            increment: (state) => {
                state.count++;
            },
            decrement: (state) => {
                state.count--;      
            },
            reset: (state) => {
                state.count = 0;
            },
             incrementByAmount: (state, action) => {
                state.count = state.count + action.payload;
             },
                decrementByAmount: (state, action) => {
                state.count -= action.payload;
                }
        }
    }, initialState)    

    export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;   // export the actions

    export default counterSlice.reducer;    
    