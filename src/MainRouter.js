import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

class MainRouter extends Component {
    render() {
        return (
            <div>
                    <Switch>
                        <Route exact path="/"><Login /></Route>
                        <Route exact path="/dashboard"><Dashboard /></Route>
                        <Route exact path="/"><Login /></Route>
                    </Switch>
            </div>
        );
    }
}

export default MainRouter;