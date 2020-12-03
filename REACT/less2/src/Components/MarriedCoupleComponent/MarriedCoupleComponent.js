import React, {Component} from 'react';

class MarriedCoupleComponent extends Component {
    render() {
        let {coupleX}=this.props
        return (
            <div>
                Husband:{coupleX.husband} Wife:{coupleX.wife}
            </div>
        );
    }
}

export default MarriedCoupleComponent;