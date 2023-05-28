import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as todosReducer} from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todosReducer
})

const myMiddleWare = (store) => (dispatch) => (action) => {
    if(typeof action === 'function'){
        return action(dispatch);
    }

    return dispatch(action);
}

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));