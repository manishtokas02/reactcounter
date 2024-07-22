import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setCounter] =useState(0)

   const addValue=()=>{
    if(counter<20){
      // counter = counter =1
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
  
   console.log(counter)
    }
   

   
   

   }
   const removeValue =()=>{
   if(counter>0){
    counter = counter-1 
    // setRemoveClicks=removeClicks+1
    setCounter(counter)
    console.log(counter)
   }
    
   }

  return (
    <>

      <h1> learn react </h1>
      <h2> counter value :{counter} </h2>
      <button 
      onClick={addValue}> Add value</button>
      <br />
      <button
      onClick={removeValue}>remove value </button>
      {/* <p>Total Clicks on Button  :  {totalClicks} </p> */}
    </>
  )
}

export default App
