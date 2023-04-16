import { loadData, saveData } from "../../utils/addLocalStorage";
import { ADD, REDUCE } from "./actionType";

const initialState = {
  counter: loadData('counter') || 0
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: {
      saveData('counter', state.counter + payload);
      return {
        ...state,
        counter: state.counter + payload
      };
    }

    case REDUCE: {
      saveData('counter', state.counter - payload);
      return {
        ...state,
        counter: state.counter - payload
      };
    }

    default: {
      return { ...state };
    }
  }
};