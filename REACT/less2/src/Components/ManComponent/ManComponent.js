import React, {Component} from 'react';

class ManComponent extends Component {
    render() {
        let {userX}=this.props;
        return (
            <div>
                Name:{userX.name} Age:{userX.age} Id:{userX.id} WifeId:{userX.wife_id}
            </div>
        );
    }
}

export default ManComponent;