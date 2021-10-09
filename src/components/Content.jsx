import React from "react";
import './Content.css';
import {Route, Switch} from "react-router-dom";

import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Api from "../views/Api";

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/api" component={Api} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default Content;
