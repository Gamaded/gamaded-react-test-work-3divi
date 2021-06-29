import "./index.css";
import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import StatisticPage from "./containers/StatisticPage";
import fetchStatistic from "./store/reducers/fetchStatistic.js";
import store from "./store/store.js";

store.dispatch(fetchStatistic);

ReactDOM.render(
    <Provider store={store}>
        <StatisticPage />
    </Provider>,
    document.getElementById("root")
);
