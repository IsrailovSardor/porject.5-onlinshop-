import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store