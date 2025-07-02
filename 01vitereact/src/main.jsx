import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'


// this will also work because we know in app it also contains function only that we have passed here only
function Myapp(){
  return (
    <>
    <h2>hello world</h2>
    </>
  )
}

// but as we have seen that when we made our custom react we made an object that has been rendered
// so here also we will see that it would work or not
const Reactelement={
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}
// but we will see that iw wont run because we know that for this custom obejct we made our customrender
// and the render that is here would have some another syntax 
// NOTE--> due to change of syntax it wont run
// but if we craete an element by the react it would run because it has the fixed type of syntax
const varone="chai aur code"
const anotherelement=React.createElement(
  // first parameter that is any "tag"
  // eg--:
  'a',
  // next parameter that is expected that is an object
  {href: 'https://google.com', target: '_blank'} ,
  // last parameter that is expected is a direct text
  'click me to visit google',
  // NOTE-->
  // after the formation of above whole tree the variables are being injected if there are  mentioned any
  // for eg--:
  varone


)

ReactDom.createRoot(document.getElementById('root')).
render(

  anotherelement
)
