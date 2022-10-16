import { useState } from "react"

function Child2(props){
    let [childdata,setChildata]=useState('child2')
    return(
        <div className='container text-center'>
          <h1>
              child2
          </h1>
          <h3>{props.username}</h3>
          <button className="btn btn-primary" onClick={()=>props.getDataByChild(childdata)}>send</button>
        </div>

    )
}
export default Child2