import { useState , useCallback , useEffect, useRef} from "react";

function App() {
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")

  const passwordreference=useRef(null)

  // usecallback(funtion,functiondependencies(and these are taken in the form of an array));
  const passwordgenerator=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys"

    if(numberallowed) str +="123456789"
    if(charallowed) str += "!@#$%^&*()?><}{|~[]"

    for (let i = 1; i <= length; i++){
      let char= Math.floor(Math.random() * str.length +1)
      
      pass +=str.charAt(char);
    }

    setpassword(pass)

  },[length,numberallowed,charallowed,setpassword])

  const copypaswwordtoclipboard=useCallback(() => {
    // here we can use direct "window" because we are currently working on react 
    // but when we do on next.js we cannot use directly "window" because there is server side rendering(means all the code will be executed to the server)
    // HOW TO COPY ANYTHING TO CLIPBOARD
    window.navigator.clipboard.writeText(password) 

    // but as we know we havent use the function of refernce
    passwordreference.current?.select()
    // if we dont want to select the whole password rather some part of it
    passwordreference.current?.setSelectionRange(0,9)
  },[password])

  // ye hook function ko run karne ka kaam karta hai
  useEffect(() => {
    passwordgenerator()
  },[length,numberallowed,charallowed,passwordgenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4"> 
    <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly  ref={passwordreference}/>
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copypaswwordtoclipboard}>copy</button>
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
