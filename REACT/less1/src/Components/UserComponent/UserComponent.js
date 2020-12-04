import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        const user=this.props.item;

        return (
            <div>
                Name:{user.name} Age:{user.age} Status:{user.status.toString()}

            </div>
        );
    }
}

export default UserComponent;