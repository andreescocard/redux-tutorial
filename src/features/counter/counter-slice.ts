import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    counter: {
        value: number
    }
}

const initialState: CounterState = {
    counter: {
        value: 0
    }
}

//https://redux-toolkit.js.org/api/createSlice
export const counterSlice = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter.value += 1; 
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.counter.value += action.payload; 
        }
    }
})

export const {increment, incrementAmount} = counterSlice.actions
export default counterSlice.reducer;