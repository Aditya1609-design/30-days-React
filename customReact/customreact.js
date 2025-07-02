// now we will see that how "customrender" will work
function customrender(element,content){
    /* this is that verison in which we need to mahnat krni padegi
    ass setting each each attributes it will take time 
    const domElemnt=document.createElement(reactelement.type)
    domElemnt.innerHTML=element.children
    domElemnt.setAttribute('href',element.props.href)
    domElemnt.setAttribute('target',element.props.target)

    content.appendChild(domElemnt)
    */

    // now we will see the optimum approach
    const domelement=document.createElement(element.type)
    domelement.innerHTML = element.children

    for (const prop in element.props) {
        if(prop === 'children') continue;
        domelement.setAttribute(prop,element.props[prop])
    }

    content.appendChild(domelement)
}

/* as we are making our own react so we need to make this also 
 that how react takes any element or tags or anything that we directly give 
 seeing the backend of how react takes the element
 */
 // let us suppose we need to return <a /> tag  
 const reactelement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
 }

const maincontent=document.querySelector('#root')

customrender(reactelement,maincontent)
