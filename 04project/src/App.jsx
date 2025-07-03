import { useState } from "react"

function App() {
  const [color,setcolor]= useState("olive")


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "green"}} onClick={() => setcolor("green")}>green</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setcolor("yellow")}>yellow</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "pink"}} onClick={() => setcolor("pink")}>pink</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "silver"}} onClick={() => setcolor("silver")}>silver</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setcolor("blue")}>blue</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "black"}} onClick={() => setcolor("black")}>black</button>
        <button className="outilne-none px-4 py-1 rounded-full  shadow-lg" style={{backgroundColor: "purple"}} onClick={() => setcolor("purple")}>purple</button>
      
      </div>
      </div>
    </div>

    </>
  )
}

export default App
