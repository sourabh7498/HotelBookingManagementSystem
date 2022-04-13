//import "../Navigate/HomePage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../Navigate/HomePage.css'
import { url } from "../Common/Common";




const HomePage = () => {
  
   
    const history = useHistory();
    const navAbout = () => {
        history.push("/About")
    }

    const navRegister = () =>{
        history.push("/Register")
    }   

    const navSignIn = () =>{
        history.push("/SignIn")
    }

    return (
        <section id = "HomePage">
        <div >
            

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" >
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Offers and Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={navAbout} >About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/login" className="nav-link" aria-current="page">Prime Membership</a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Branches
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Pune</a></li>
                                <li><a className="dropdown-item" href="/">Mumbai</a></li>
                                <li><a className="dropdown-item" href="/">Satara</a></li>

                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a href = "/Admin" className="nav-link" aria-current="page">Admin LogIn</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
        
        <div className="signin d-grid gap-2">
        
          <button type="button" className="btn btn-primary " onClick={navRegister}>Register</button>
          <button type="button" className="btn btn-dark " onClick={navSignIn}>Sign In</button>
        
        </div>
      
            
            
           
        
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </section>
    );
}


export default HomePage;