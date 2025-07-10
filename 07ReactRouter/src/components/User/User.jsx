// this is imp thing as it is dynamically we can go to anything we want like we have made the static one like home about contact 


import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} =useParams()
    return (
        <div>User: {userid}</div>

    )
    
}

export default User 
