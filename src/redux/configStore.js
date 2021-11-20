import {combineReducers, applyMiddleware, createStore} from 'redux'
import {PostReducers} from "./reducers/PostReducers"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    PostReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
