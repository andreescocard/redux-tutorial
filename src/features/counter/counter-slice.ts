import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

//https://redux-toolkit.js.org/api/createSlice
export const counterSlice = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; 
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload; 
        }
    }
})

export const {increment, incrementAmount} = counterSlice.actions
export const counterReducer = counterSlice.reducer;