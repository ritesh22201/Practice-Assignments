import { DECREMENT, INCREMENT, RESET } from "./actionType";

let initState = {
  counter : 0
}

export const reducer = (state = initState, action) => {
   switch(action.type){
    
     case INCREMENT : {
        return {
            ...state,
            counter : state.counter + action.payload 
        }
     }

     case DECREMENT : {
        return {
            ...state,
            counter : state.counter - action.payload
        }
     }

     case RESET : {
        return {
            ...initState
        }
     }

      default : {
        return state;
      }
   }
}