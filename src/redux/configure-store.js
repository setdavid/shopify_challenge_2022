import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";

const reducer = combineReducers({
    mode: modeReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;