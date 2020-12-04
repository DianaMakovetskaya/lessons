import React, {Component} from 'react';
import CarComponent from "../CarComponent/CarComponent";

class Cars extends Component {
    cars=[{model:'cx3',power:5,producer:'mazda'},{model:'x5',power:7,producer:'bmw'},{model:'q8',power:9,producer:'audi'}]
    render() {
        return (
            <div>
                {
                    this.cars.map((car,index)=><CarComponent item={car} key={index}/>)
                }
            </div>
        );
    }
}

export default Cars;