import React from "react";
import { useSelector} from "react-redux";
import Task from "./Task";

const ListTask = () => {
    const tasklist = useSelector (state => state.list); //select the state from reducer
console.log(tasklist)
    
  return (
    <div className="div">
        {
            tasklist.map((el,i)=> < Task task= {el} key={i} />)
        }


    </div>
  )
}

export default ListTask