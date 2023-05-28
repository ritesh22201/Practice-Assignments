import { DECREMENT, INCREMENT } from "./actionType"


export const addCounter = (payload) => {
    return { type: INCREMENT, payload: payload };
}

export const reduceCounter = (payload) => {
    return { type: DECREMENT, payload: payload };
}