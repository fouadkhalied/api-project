






//reducer 
// access => state , action
// state => edit by action

import { json } from "react-router-dom";
import { print123 } from "./Actions/action-types";



const reducer1 = (state = {
    x1 : [] , 
    } , action)=>{
    switch (action.type) {  
        case print123 : 
            return {...state , x1 : action.para}
        default:
            return state;
    }
}
export default reducer1;

