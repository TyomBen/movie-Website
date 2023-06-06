import { combineReducers } from 'redux'
import { reduce } from './reducers/movies'

export const allReducers = combineReducers ({
   movie : reduce
})