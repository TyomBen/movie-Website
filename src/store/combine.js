import { combineReducers } from 'redux'
import { reduce } from './reducers/movies'
import { loginReduce } from './reducers/login'
import { passwordReduce } from './reducers/password'
export const allReducers = combineReducers ({
    movie : reduce,
    loginUser : loginReduce,
    passwordUser : passwordReduce
})