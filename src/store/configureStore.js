import {  combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'

import numberReducer from '../reducers/numberReducer'
import userReducer from '../reducers/userReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count : countReducer,
        numbers : numberReducer,
        users : userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
