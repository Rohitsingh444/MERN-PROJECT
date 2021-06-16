import React, {useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import Header from './Header'

function Login() {

    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const history=useHistory()
    const [userErr,setuserErr]=useState(false);
    const [passErr,setpassErr]=useState(false);

    
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
    const datahandler=(event)=>
    {
        if(email=="" || password.length<8)
        {
            alert("Please fill yor correct data")
        }
        else{
            history.push("/addproduct")
        }
     let item={email,password}
     console.warn(item)
    event.preventDefault();
   
    //  alert(
    //      `Name: ${username}. Email: ${email}`);
    
     }
     
    return (
        <div>
        
        <Header/>
        <div className="my-5">
        <h1 className="text-center">User Sign IN</h1>   
        </div>   
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
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
                className="btn btn-outline-secondary" onClick={datahandler} >Submit</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        <div className="container">
        <div className="row justify-content-end">
        <div class="col-8">
        <Link className="navbar-brand"  exact to="/register"><h6 className="text-secondary">Create an account</h6></Link>
        </div>
        </div>
        </div>
        

      
</div>
    )
}

export default Login
