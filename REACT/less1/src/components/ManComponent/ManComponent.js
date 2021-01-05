import React, {Component} from 'react';


const ManComponent=(props)=>{
    let {userX}=props;
    return (
        <div>
            Name:{userX.name} Age:{userX.age} Id:{userX.id} WifeId:{userX.wife_id}
        </div>
    );
}


export default ManComponent;