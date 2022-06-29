import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";

export default function PageRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route path="/meet">
                    <OpenMeeting url = "https://meet.google.com/hih-zjrs-was"/>
                </Route>
            </Switch>
        </Router>
    );

    function OpenMeeting({url}) {
        window.location.replace(url);
        return null;
    }
}