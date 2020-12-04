import React, {Component} from 'react';
import FlatComponent from "../FlatComponent/FlatComponent";

class Flats extends Component {
    flats=[{floors:3,rooms:5,square:100},{floors:9,rooms:7,square:150},{floors:2,rooms:3,square:60}]
    render() {
        return (
            <div>
                {
                    this.flats.map((flat,index)=><FlatComponent item={flat} key={index}/>)
                }
            </div>
        );
    }
}

export default Flats;