import React, {Component} from 'react';
import ManComponent from "../ManComponent/ManComponent";

class Men extends Component {
    render() {
        let {men}=this.props;
        return (
            <div>
                {
                    men.map((user,index)=><ManComponent userX={user} key={index}/>)
                }
            </div>
        );
    }
}

export default Men;