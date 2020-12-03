import React, {Component} from 'react';
import UserComponent from "../UserComponent/UserComponent";

class Users extends Component {
    users=[{name:'kolya',age:19,status:false},{name:'kolya',age:19,status:false},{name:'kolya',age:19,status:false}];

    render() {

        return (
            <div>
                {
                    this.users.map((user,index)=><UserComponent item={user} key={index}/>)
                }
            </div>
        );
    }
}

export default Users;