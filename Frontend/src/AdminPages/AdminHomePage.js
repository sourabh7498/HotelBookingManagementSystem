import '../Navigate/UserDashboard/HotelBranches/HotelBranches.css';
import bookings from '../images/bookings.jpg'
import users from '../images/user.jpg'
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Footer from "../Footer";
import "../Footer.css";
import Revenue from './Revenue';

const AdminHomePage = () => {
    // alert(sessionStorage.getItem('email'))
    // console.log("ID is :"+sessionStorage.getItem("tempid"))
    // console.log(localStorage.getItem("id"))
    
    return (
        <div>
        <AdminNavbar/>
        
        <section id="services">
        <h1 className = "centre title">Welcome Admin</h1>
            <div className="text-center container">
                <div className=" text-center row " >
                    <Revenue/>
                    <div className="col-md-4 services">
                        <Link to="/admindata" className="link">
                        <img src={bookings} alt="Bookings" className="service-img" />
                        <h4>Booking Details</h4>
                        <p>Click to Check</p>
                        </Link>
                    </div>
                    <div className="col-md-4 offset-md-4 services">
                        <Link to="/adminuserdata" className="link">
                            <img src={users} alt="users" className="service-img" />
                            <h4>User Details</h4>
                            <p>Click to Check</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        < Footer/>
        </div>
        
    )
}

export default AdminHomePage;