import { DECREMENT, DELETE_TODOS, INCREMENT, RESET } from "./actionType"

const initialState = {
    counter : 0,
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case INCREMENT : {
            return {
                ...state,
                counter : state.counter + payload  
            }
        }

        case DECREMENT : {
            return {
                ...state,
                counter : state.counter - payload
            }
        }

        case RESET : {
            return {
                ...state,
                counter : payload
            }
        }

        default : {
            return state;
        }
    }
}