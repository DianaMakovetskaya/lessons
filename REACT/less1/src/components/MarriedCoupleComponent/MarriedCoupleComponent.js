import React, {Component} from 'react';

const MarriedCoupleComponent=(props)=>{
    let {couple}=props;
    return (
        <div>
            {couple.husband}--{couple.wife}
        </div>
    );
}


export default MarriedCoupleComponent;