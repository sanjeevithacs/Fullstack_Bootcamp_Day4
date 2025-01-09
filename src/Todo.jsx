import React, { useState } from 'react'
import { useRef } from 'react'

function Todo() {
    const refer = useRef()
    const [data,setData] = useState([])

    function clickevent(){
   // console.log(refer.current.value)
    setData([...data,{task:refer.current.value}])   //single object 
    refer.current.value =" "       //to make i/p empty each time after save
    }
  return (
    <div>
        <input ref={refer} type='text'></input>
        <button onClick={clickevent}>save</button>

        {data.map(i=><li>{i.task}</li>)}

    </div>
  )
}

export default Todo

//TASK-2  remove - use filter method id!=