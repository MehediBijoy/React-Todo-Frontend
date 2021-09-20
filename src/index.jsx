import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./styles/main.scss"
import Navbar from "./components/Navbar"
import TodoPage from "./components/main";

const Index = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={TodoPage} />
            </Switch>
        </Router>
    )
}

render(<Index/>, document.getElementById('root'))