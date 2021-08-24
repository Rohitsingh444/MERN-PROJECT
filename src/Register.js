import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
function Register() {
    // const [data,setdata]=useState({
    //     username: "",
    //     email:"",
    //     password:"",
    // })

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem("User-info")) {
            history.push('./addproduct')
        }
    }, [])


   const data1=()=>{

       // event.preventDefault();
        //  alert(
        //      `Name: ${username}. Email: ${email}`);
        //     let item={username,email,password}
        //     console.warn(item)
        let newdata = {
            name: username,
            email: email,
            password: password

        }

        if (username == "" || email == "" || password.length < 8) {
            alert("Please fill yor correct data")
        }
        else {
            console.log(newdata)

            //   axios.post("/frontend",newdata)

                fetch("/frontend", {
                method: 'POST',
                body: JSON.stringify(newdata),
                headers: {
                    'Content-Type': 'application/json'

                }
            });
           
            localStorage.setItem("User-info", JSON.stringify(newdata))
        
        }

    }
    return (
        <>
            <Header />
            <div className="my-5">
                <h1 className="text-center">User Sign Up</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form novalidate>

                            <div className="mb-3">
                                <div className="col-sm-1">
                                    <label for="exampleFormControlInput1" className="form-label">UserName</label>
                                </div>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter user name"
                                    value={username}
                                    onChange={(event) => setusername(event.target.value)}
                                    required />
                            </div>
                            <div className="mb-3">
                                <div className="col-sm-1">
                                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                                </div>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter email"
                                    value={email}
                                    onChange={(event) => setemail(event.target.value)}
                                    required />
                            </div>
                            <div className="mb-3">
                                <div className="col-sm-1">
                                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                                </div>
                                <input type="password"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="enter your password"
                                    value={password}
                                    onChange={(event) => setpassword(event.target.value)}
                                    required />
                            </div>
                            {/* <div classNameName="mb-3">
        <input classNameName="form-check-input" type="checkbox" id="autoSizingCheck" />  
        <label classNameName="form-check-label" for="autoSizingCheck">Remember me </label>
        </div> */}
                            <div className="col-sm-1">
                                <button type="submit"
                                    className="btn btn-outline-secondary" onClick={data1} >Submit</button>

                            </div>

                        </form>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div class="col-sm-8">
                        <Link className="navbar-brand" exact to="/"><h6 className="text-secondary">I am already register</h6></Link>
                    </div>
                </div>
            </div>




        </>

    )
}

export default Register
