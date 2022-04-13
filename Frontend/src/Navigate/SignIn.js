import React from "react";
import axios from "axios";
import { url } from "../Common/Common";
import { useEffect, useState } from "react";
import { Link,useHistory } from 'react-router-dom'

import UserDashboard from "./Navbar";
import HotelBranches from "./UserDashboard/HotelBranches/HotelBranches";





const SignIn = () => {
    const data = new FormData()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
     
     data.append('email', email)
     data.append('password', password)

    const history = useHistory();
    useEffect(() => {
        console.log("hello")
    })


    const LogInUser = (e) => {
        e.preventDefault();
         const data = new FormData()
         data.append('email', email)
        data.append('password', password)

        sessionStorage.clear()

        axios.post(url + '/user/authenticate', data).then((response) => {
            const result = response.data
            
            if (result.status === 'success') {
                
                
                sessionStorage.setItem("id", result.data.id)
                //var tid = sessionStorage.getItem("id")
                sessionStorage.setItem("address", result.data.address)
                sessionStorage.setItem("email", result.data.email)
                alert('Login Sucessfull!')
                localStorage.setItem("id", result.data.id)
                
                window.location='/HotelBranches'
                // console.log(""+sessionStorage.getItem("id"))
                // alert(""+sessionStorage.getItem('id'))
                
                
                
            } else {
                console.log(result.error)
                alert('Login Failed!...Please try again!')
                window.location = '/SignIn'
                
            }
        })
    }
        
    return (
        <div>
            {/* <HNavbar /> */}

            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3> User Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value); }} />
                                </div>

                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value); }} />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" onClick={LogInUser} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/Register">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SignIn;



