import React, {Component} from 'react';

const MarriedCoupleComponent=(props)=>{
    let {item}=props;
    return (
        <div>
            {
                item.map(human=>human.name)
            }
        </div>
    );
}


export default MarriedCoupleComponent;