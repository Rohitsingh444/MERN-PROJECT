import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Login(props) {
let Component = props.component
const history=useHistory()
useEffect(() => {
    if(!localStorage.getItem('User-info')){
     history.push("./signup")
    }
  }, []);   
    return(
        <div>
        <Component />
        </div>
    )
}

export default Login
