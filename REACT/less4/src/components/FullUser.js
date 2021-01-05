import React, {Component} from 'react';
import {UserService} from "../services/UserService";

class FullUser extends Component {
    state={user:null}
    userService=new UserService();

    async componentDidMount() {
        let {id}=this.props;

        let user= await this.userService.getOneUser(id);
        this.setState({user:user})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    render() {
        let {user}=this.state;
        return (
            <div>
                {
                    user && (user.name)
                }

            </div>
        );
    }
}

export default FullUser;