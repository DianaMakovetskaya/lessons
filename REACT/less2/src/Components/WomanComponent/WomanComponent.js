import React, {Component} from 'react';

class WomanComponent extends Component {
    render() {
        let {womanX}=this.props;
        return (
            <div>
                Name:{womanX.name} Age:{womanX.age} Id:{womanX.id} HusbandId:{womanX.husband_id}

            </div>
        );
    }
}

export default WomanComponent;