import React, {Component} from 'react';
import MarriedCoupleComponent from "../MarriedCoupleComponent/MarriedCoupleComponent";

class MarriedCouples extends Component {
    state={showStatus:true, marriedCouple:[]}
    render() {
        let {men,women}=this.props;
        let {showStatus,marriedCouple}=this.state;
        return (
            <div>
                <button onClick={()=>this.makeCouple(men,women)}>Make couple</button>
                <button onClick={()=>this.hideShow()}>Show/hide</button>
                {
                    marriedCouple.length&&showStatus&&this.state.marriedCouple.map((item,index)=><MarriedCoupleComponent item={item} key={index}/>)

                }
            </div>
        );
    }
    makeCouple(men,women){
        let MarriedCouple=[];
        men.forEach(m=>{
            const foundWoman=women.find(w=>m.wife_id===w.id)
            MarriedCouple.push([m,foundWoman])
        })
        this.setState({marriedCouple:MarriedCouple})
    }

    hideShow=()=>{
        this.setState({showStatus:!this.state.showStatus});
    }

}

export default MarriedCouples;