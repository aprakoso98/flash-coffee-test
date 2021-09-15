import { createSelectorHook } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";

const reducer = combineReducers({

});

const middleware = [];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

export const useSelector = createSelectorHook<ReturnType<typeof reducer>>()

export default store;
