import React, {Component} from 'react';
import WomanComponent from "../WomanComponent/WomanComponent";

class Women extends Component {
    render() {
        let {women}=this.props;
        return (
            <div>
                {
                    women.map((woman,index)=><WomanComponent womanX={woman} key={index}/>)
                }
            </div>
        );
    }
}

export default Women;