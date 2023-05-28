import { DECREMENT, INCREMENT, RESET } from "./actionType"


export const handleInc = (payload) => {
   return {type : INCREMENT, payload : payload}
}

export const handleDec = (payload) => {
    return {type : DECREMENT, payload : payload}
}

export const resetHandler = (payload) => {
    return {type : RESET, payload : payload}
}




