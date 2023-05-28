import {combineReducers, legacy_createStore} from 'redux';
import { reducer as counterReducer } from './reducer';

const rootReducer = combineReducers({
    counterReducer
})

export const store = legacy_createStore(rootReducer); 
