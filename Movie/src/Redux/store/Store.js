/*
Filename: Store
Description: Global store
*/
import {createStore, applyMiddleware} from 'redux'
import MovieReducer from "../Reducers/QuoteReducer"
import thunk from 'redux-thunk'
const store = createStore(MovieReducer, applyMiddleware(thunk))

export default store