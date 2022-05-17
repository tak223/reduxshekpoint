import { ADDTASK, EDITTASK, FILTERTASKES, DELETETASK } from "../actionTypes/actionTypes";


const initialState = {
   list : [
    {
        id: Math.random() ,
        discription:'kkkkkk',
        isdone:false ,

    },
   ]
}
 export const reducertask = ( state = initialState, {type,payload})=>{
    switch (type) {
        case ADDTASK: return {...state, list:[...state.list,payload]}
        case EDITTASK:
        case DELETETASK:
        case FILTERTASKES: 
        default: return state;
           
    }
}
