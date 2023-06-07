import React from 'react'
import { useState } from 'react';

export default function State() {

// let User ="Reactjs"
const [User,setUser] = useState('React')

const ChangeName = () =>{
 setUser ('JS')
console.log(User);

}

  return (
    <>
      <h3>{User}</h3>
      <button onclick={ChangeName}>ChangeName</button>
    
    </>
  )
}


