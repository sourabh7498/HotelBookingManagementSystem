import "../Navigate/Navbar.css";
import React from "react";
//import logo from "../images/logo.png"
const AdminNavbar = () =>{
    return(
        <div>
            <section id="nav-bar">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid navbar-brand mb-0 h1">
                        <a class="navbar-brand" href="#" className="navbar-brand mb-0 h1" >Hotel Good Vibes</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars" ></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav " >
                                <li class="nav-item">
                                    <a class="nav-link " href="/adminhomepage">Home</a>
                                    {/* <Link to="/HotelBranches" className="link">
                                     </Link> */}
                                </li>
                                <div className="signout">
                                    <button className="btn btn-outline-success button w-100" onClick={sessionStorage.clear() } ><a href="/HomePage">Sign Out</a></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            
        </div>
    )
}

export default AdminNavbar;