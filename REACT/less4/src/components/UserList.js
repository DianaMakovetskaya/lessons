import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "./User";

class UserList extends Component {
    userService = new UserService();

    state = {
        users: []
    }

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({
            users:users
        });
    }

    render() {
        let {users}=this.state;
        return (
            <div>
                {
                   users && users.map((value, index) => <User user={value} key={index}/>)
                }
            </div>
        );
    }
}

export default UserList;