import { combineReducers, createStore } from "redux";
import apodReducer from "./ducks/apod";

const reducer = combineReducers({
    apod: apodReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;