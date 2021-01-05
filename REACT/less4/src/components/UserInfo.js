import React, {Component} from 'react';
import {Route, Switch,withRouter} from "react-router-dom";
import FullUser from "./FullUser";

class UserInfo extends Component {
    render() {
        let {match:{url}}=this.props;
        return (
            <div>
                <Switch>
                    <Route path={'/user/:id'} render={(props)=>{
                        let {match:{params:{id}}}=props
                        return <FullUser id={id} key={id}/>
                    }}/>


                </Switch>
            </div>
        );
    }
}

export default withRouter(UserInfo);