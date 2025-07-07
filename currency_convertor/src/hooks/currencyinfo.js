import {useEffect,useState} from "react"

// making a custom hook
function usecurrencyinfo(currency){
    // now we need to call an API
    const [data,setdata]=useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((val) => val.json())
        .then((val) => setdata(val[currency]))
    },[currency])

    return data;
}

export default usecurrencyinfo;