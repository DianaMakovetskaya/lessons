import React, {Component} from 'react';

class FlatComponent extends Component {
    render() {
        const flat=this.props.item;
        return (
            <div>
                Floor:{flat.floors} Rooms:{flat.rooms} Square:{flat.square}
            </div>
        );
    }
}

export default FlatComponent;