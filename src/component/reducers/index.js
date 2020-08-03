import { combineReducers } from 'redux'
import counterReducers from "./counter";


const counterCombineReducers = combineReducers({
    counterReducers,
})

export default counterCombineReducers