import { createSelectorHook } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware'
import AppRedux from "./app";
import { reducerSchedules } from "./schedules";

const reducer = combineReducers({
	...AppRedux,
	SCHEDULES: reducerSchedules
});

const middlewares = [promise]
const store = createStore(reducer, {}, applyMiddleware(...middlewares));

export const useSelector = createSelectorHook<ReturnType<typeof reducer>>()

export default store;
