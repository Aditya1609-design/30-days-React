import { useState } from 'react' //this is how hooks are called here "usestate" is a "hook"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // this is how hooks is used || useState hook is used for changing of the states
  let [countervalue,setcountervalue]=useState(15)
  

  // varible will be updated but this variable wont be deflected as updated in the UI
  // let countervalue=15

  function addvalue(){
    if(countervalue<20){
      countervalue=countervalue+1
      setcountervalue(countervalue)
    }
  }

  function removevalue(){
    if(countervalue>0){
      countervalue=countervalue-1;  
      setcountervalue(countervalue)
    }
    
    
  }

  return (
    <>
      <h1>Hooks project basic</h1>
      <h2>counter value: {countervalue}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
