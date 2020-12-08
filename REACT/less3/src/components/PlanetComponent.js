import React, {Component} from 'react';

class PlanetComponent extends Component {
    render() {
        let {planet}=this.props;
        return (
            <div>
                {planet.name}
            </div>
        );
    }
}

export default PlanetComponent;