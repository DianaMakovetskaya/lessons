import React, {Component} from 'react';


const WomanComponent=(props)=>{
    let {womanX}=props;
    return (
        <div>
            Name:{womanX.name} Age:{womanX.age} Id:{womanX.id} HusbandId:{womanX.husband_id}
        </div>
    );
}


export default WomanComponent;