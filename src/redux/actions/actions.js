import {types} from "../types"


export function inputValueAction (value) {

    return {
        type: types.INPUT_VALUE,
        payload: value

    }
}

export function numberSumAction () {

    return {
        type: types.NUMBER_SUM,
    }
}