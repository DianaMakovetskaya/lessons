import React from 'react';
import {withRouter,NavLink} from "react-router-dom";

const User=(props)=>{
    let {match:{url}}=props;


    let {user}=props;
        return (
            <div>
                {user.id}.{user.name} <NavLink to={`/user/${user.id}`}>Info</NavLink>
            </div>
        );
}



export default withRouter(User);