import {legacy_createStore} from 'redux';
import {reducer} from './reducer';

const initial_state = {
    counter : 0, 
    todos : [],
    product : [],
    isAuth : false
}

export const store = legacy_createStore(reducer, initial_state);