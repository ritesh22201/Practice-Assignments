import {combineReducers, legacy_createStore} from 'redux';
import {reducer as counterReducer} from './CounterReducer/reducer';
import {reducer as todosReducer} from './TodosReducer/reducer';

const rootReducer = combineReducers({
   counterReducer,
   todosReducer
})

export const store = legacy_createStore(rootReducer);

// const [state, dispatch] = useReducer(reducer, initialState);