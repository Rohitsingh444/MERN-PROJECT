import React, {useState,useEffect} from 'react'
import {useHistory,Link} from 'react-router-dom'
import Header from './Header'
import axios from 'axios';
function Login() {

    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const history=useHistory()
    const [userErr,setuserErr]=useState(false);
    const [passErr,setpassErr]=useState(false);


    useEffect(() => {
        if(localStorage.getItem('User-info')){
         history.push("/addproduct")
        }
      }, []);
    
    function emailhandler(event)
    {

        
        let item=event.target.value
        
        if(item.length=='')
        {
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        setemail(item)
    }


    function passwordhandler(event)
    {
        let item=event.target.value
        
        if(item.length<8)
        {
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpassword(item)
    }
    const datahandler=()=>
    {

        
        const newdata={
            email: email,
            password: password
     
         } 
        if(email=="" || password.length<8)
        {
            alert("Please fill yor correct data")
        }
        else{
           // axios.post("/frontendsignin",newdata)
           //   OR
           fetch("/frontendsignin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(newdata),
        });
  
       localStorage.setItem('User-info',JSON.stringify(newdata))
        }
     
    // event.preventDefault();
    //  alert(
    //      `Name: ${username}. Email: ${email}`);
    
     }
     
    return (
        <div>
        
        <Header/>
        <div className="container mt-5 Addproductbody " style={{height:'420px',margin:'auto',width: '50%',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <div className="my-5">
        <h1 className="text-center">User Sign IN</h1>   
        </div>   
        <div className="container  contact_div">
        <div className="row">
        <div className="col-md-10 col-10 mx-auto">
        <form >
       
        <div className="mb-3">
        <div className="col-sm-1">
        <label  className="form-label">Email</label>
        </div>
        <input type="email" 
               className="form-control"  
               placeholder="enter email" 
               value={email} 
               onChange={emailhandler} 
               />{userErr?<span className="col-sm-6 text-primary" >Please fill your email</span>:""}   
           
        </div>
        <div className="mb-3">
        <div className="col-sm-1">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        </div>
        <input type="password"
               className="form-control" 
               placeholder="enter your password" 
               value={password} 
               onChange={passwordhandler} 
               />{passErr?<div className="col-sm-6 text-primary">Password has minimum 8 charactors</div>:""} 
        </div>
        {/* <div classNameName="mb-3">
        <input classNameName="form-check-input" type="checkbox" id="autoSizingCheck" />  
        <label classNameName="form-check-label" for="autoSizingCheck">Remember me </label>
        </div> */}
        <div className="col-sm-1">
        <button type="submit" 
                className="btn btn-outline-secondary " onClick={datahandler} >Submit</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        <div className="container ">
        <div className="row justify-content-end">
        <div className="col-md-5">
       <Link className="navbar-brand" exact to="/register"><h6 className="text-secondary">Create an account</h6></Link>
        </div>
        </div>
        
        </div>  
        </div>  
</div>
    )
}

export default Login
