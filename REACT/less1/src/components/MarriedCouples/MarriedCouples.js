import React, {Component} from 'react';
import MarriedCoupleComponent from "../MarriedCoupleComponent/MarriedCoupleComponent";

class MarriedCouples extends Component {
    render() {
        let {men,women}=this.props;
        return (
            <div>
                <button onClick={()=>this.makeCouple(men,women)}>Make couple</button>
            </div>
        );
    }
    makeCouple(men,women){
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