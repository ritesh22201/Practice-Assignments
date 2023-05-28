import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as todosReducer} from './reducer'

const myMiddleWare = [thunk]
const rootReducer = combineReducers({
    todosReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(...myMiddleWare));