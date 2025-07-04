import { useState , useCallback} from "react";

function App() {
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")

  // usecallback(funtion,functiondependencies(and these are taken in the form of an array));
  const passwordgenerator=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys"

    if(numberallowed) str +="123456789"
    if(charallowed) str += "!@#$%^&*()?><}{|~[]"

    for (let i = 1; i <=str.length; i++){
      let char= Math.floor(Math.random() * str.length +1)
      
      pass=str.charAt(ch);
    }

    setpassword(pass)

  },[length,numberallowed,charallowed,setpassword])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4"> 
    <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly />
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max= {100} value={length} className="cursor-pointer" onChange={(e) => {setlength(e.target.value)}}/>
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberallowed} id="numberInput" onChange={() => {setnumberallowed((prev) => !prev)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charallowed} id="charrInput" onChange={() => {setcharallowed((prev) => !prev)}} />
          <label htmlFor="charInput">Characters</label>
        </div>
    </div>
    </div>
    </>
  )
}

export default App;
