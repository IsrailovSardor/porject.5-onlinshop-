import handleCart from "./handleCart";
import { combineReducers } from "redux";
import handlefavor from "./handlefavor";
import {productsReducer} from './productred'

const rootReducers = combineReducers ({
    handleCart,
    handlefavor,
    productsReducer
})
export default rootReducers