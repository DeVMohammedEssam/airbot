import React from "react";
import ReactDOM from "react-dom";
import { login } from "./redux/actions/user";
//bootstrap js dependencies
import "bootstrap/dist/js/bootstrap.bundle";

/*styles importing */
import "./style/style.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
if (localStorage.getItem("token")) store.dispatch(login());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
