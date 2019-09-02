//let React = require("react")
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./api/store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
)




