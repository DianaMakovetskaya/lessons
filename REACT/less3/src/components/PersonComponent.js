import React, {Component} from 'react';

class PersonComponent extends Component {
    render() {
        let {person}=this.props
        return (
            <div>
                {person.name}
            </div>
        );
    }
}

export default PersonComponent;