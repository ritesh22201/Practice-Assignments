import {applyMiddleware, legacy_createStore} from 'redux';
import {reducer as productReducer} from './productReducer/reducer';
import {reducer as authReducer} from './authReducer/reducer'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    productReducer,
    authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));