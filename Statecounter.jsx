import React from 'react'
import { useState } from 'react'
export default function Statecounter() {

const [Counter,setCounter] = useState({value:100,type:'Counter'})

const increment = () =>{
    setCounter((prevCounter) =>{
      return{value:prevCounter.value +3}
    })
}
const decrement = () =>{
    setCounter((prevCounter) =>{
        return{value:prevCounter.value -3}
    })
}

  return (
    <>
    <h3>{`Counter value is ${Counter.value}`}</h3>
    <button onClick={increment}>+3</button>
    <button onClick={decrement}>-3</button>
    </>
  )
}
