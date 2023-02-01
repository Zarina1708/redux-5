import { types } from "../types";



const initialState = {
    value: 0,
    summ: []
}

export default function reducer(state= initialState, action) {

    switch(action.type) {
        case types.INPUT_VALUE:
            return {...state, value: action.payload }

        case types.NUMBER_SUM: 
            return {...state, summ: [...state.summ, state.summ.length ? state.summ[state.summ.length - 1] + +state.value : +state.value] }

        default: return state
    }
}

