import React, {Component} from 'react';
import './ForHeader.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className={'MyHeader'}>
                <h2>CHOOSE ONE TO READ MORE</h2>
                    <div className="menu">
                        <div>
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/people'}>
                                people
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/planets'}>
                                planets
                            </NavLink>

                        </div>
                    </div>
            </div>

        );
    }
}

export default Header;