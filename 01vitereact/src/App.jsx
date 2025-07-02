import Chai from './chai.jsx'

function App() {
  // we have seen that how to return the html that is the x part of jsx 
  // but we should also know that how to inject js and variables

  const varone="chai aur code"
  return (
    // in jsx there is a problem i.e we can return only one item
    // so to overcome this problem we use the <> concept these are known as "FRAGMENTS"
    <>
      <Chai />
      <h2>hello {varone /* we should note that this is the "evaluation outcome" so all the mathematics or js should be done outside the return */}</h2>
      
    </>
    // now in this div we can add many elements as much as we want to display
    
  )
}

export default App
