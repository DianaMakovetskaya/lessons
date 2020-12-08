import React, {Component} from 'react';
import './ForHeader.css'
import People from "./People";
import Planets from "./Planets";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Header extends Component {
    render() {
        let {makeChoosePeople,makeChoosePlanet}=this.props;
        return (
            <div className={'MyHeader'}>
                <h2>CHOOSE ONE TO READ MORE</h2>

                <Router>
                <div className="menu">
                    <div>
                        <Link to={'/people'}>
                            people
                        </Link>
                    </div>
                    <div>
                        <Link to={'/planets'}>
                            planets
                        </Link>
                        <Switch>
                            <Route path={'/people'} render={()=>{
                                makeChoosePeople();
                            }}></Route>

                            <Route path={'/planets'} render={()=>{
                                makeChoosePlanet()
                            }}></Route>

                        </Switch>
                    </div>
                </div>

                </Router>

            </div>

        );
    }
}

export default Header;