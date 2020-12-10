import React, {Component} from 'react';
import {Route, Switch} from "react-router";

import People from "./People";
import Planets from "./Planets";

class Container extends Component {
    render() {
        return (
            <div>
                    <Switch>
                        <Route path={'/people'} component={People}/>
                        <Route path={'/planets'} component={Planets}/>
                        <Route path={'/'} render={() => <h1>Hello</h1>}/>
                    </Switch>
            </div>
        );
    }
}

export default Container;