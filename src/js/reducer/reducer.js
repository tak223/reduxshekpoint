import { ADDTASK, EDITTASK, FILTERTASKES, DELETETASK } from "../actionTypes/actionTypes";


const initialState = {
    searchtask:'',
   list : [
    {
        id: Math.random() ,
        discription:'kkkkkk',
        isdone:false ,

    },
    {
        id: Math.random() ,
        discription:'kkkkkk22',
        isdone:true,

    },
   ]
}
 export const reducertask = ( state = initialState, {type,payload})=>{
    switch (type) {
        case ADDTASK: return {...state, list:[...state.list,payload]}
        case EDITTASK: return  {...state, list:state.list.map((el,i)=>  el.id == payload.id ? {...el,...payload} : el )}; 
        case DELETETASK:return { ...state,list:state.list.filter((el)=> el.id !== payload.id) }

        case FILTERTASKES: return{...state,searchtask:payload}
        default: return state;
           
    }
}
