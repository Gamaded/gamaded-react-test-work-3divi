import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import usersData from "./reducers/usersData";

const store = createStore(usersData, applyMiddleware(thunkMiddleware));

export default store;
