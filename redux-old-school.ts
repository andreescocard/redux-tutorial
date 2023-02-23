import { createStore } from "redux"

const initialState = {
    counter: {
        value: 0
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case "counter/incremented":{
            return {
                ...state, //spread operator - copy state to counter
                counter: {
                    value: state.counter.value + 1,
                }
            }
        }
        default:{
            return state;
        }
    }
    
}

export const store = createStore(reducer)