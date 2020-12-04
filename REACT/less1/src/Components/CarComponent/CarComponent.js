import React, {Component} from 'react';

const CarComponent=(props)=>{
    let {item}=props;
    return (
        <div>
            Model:{item.model} Power:{item.power} Producer:{item.producer}
        </div>
    );
}


export default CarComponent;