import React, {Component} from 'react';
import MarriedCoupleComponent from "../MarriedCoupleComponent/MarriedCoupleComponent";

class MarriedCouples extends Component {
    state={isClick:false}
    render() {
        let {men,women}=this.props;
        return (
            <div>
                <button onClick={()=>this.setState({isClick:true})}>Make couple</button>
                {
                    this.state.isClick&&this.makeCouple(men,women)
                }
            </div>
        );
    }
    makeCouple(men,women){
        console.log('hi')
        let MarriedCouple=[];
        for(let i=0;i<men.length;i++){
            let couple = {};
            for(let k=0;k<women.length;k++){
                if(men[i].wife_id===women[k].id){
                    couple.husband=men[i].name;
                    couple.wife=women[k];
                    MarriedCouple.push(couple);
                }
            }
        }
        console.log(MarriedCouple);
        MarriedCouple.map((item,index)=><MarriedCoupleComponent couple={item} key={index}/>)
    }

    // printCouple(item){
    //     return(
    //         <div>
    //             Husband:{item.husband} Wife{item.wife}
    //         </div>
    //     );
    // }
}

export default MarriedCouples;