import '../HotelBranches/HotelBranches.css';
import pune from '../../../images/Pune.jpg'
import mumbai from '../../../images/Mumbai.jpg'
import satara from '../../../images/Satara.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from "../../../Footer";
import "../../../Footer.css";

const HotelBranches = () => {
    // alert(sessionStorage.getItem('email'))
    //console.log("ID is :"+sessionStorage.getItem("tempid"))
    console.log(localStorage.getItem("id"))
    
    return (
        <>
        <Navbar/>
        
        <section id="services">
        <h1 className = "centre">Welcome To - Good Vibes</h1>
            <div className="text-center container">
            
                <h2 className="title">Our Branches</h2>
                <div className=" text-center row " >
                    <div className="col-md-4 services">
                        <Link to="/pune" className="link">
                        <img src={pune} alt="Pune" className="service-img" />
                        <h4>Pune</h4>
                        <p>Shivajinagar, Pune</p>
                        <p>Price per Room : Rs 2500 /-</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/mumbai" className="link">
                            <img src={mumbai} alt="Mumbai" className="service-img" />
                            <h4>Mumbai</h4>
                            <p>Juhu Beach, Mumbai</p>
                            <p>Price per Room : Rs 2500 /-</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/satara" className="link">
                            <img src={satara} alt="Satara" className="service-img" />
                            <h4>Satara</h4>
                            <p>Shahpur, Satara</p>
                            <p>Price per Room : Rs 2500 /-</p>
                        </Link>
                    </div>
                </div>
            </div>
            < Footer/> 
        </section>
        </>
        
    )
}

export default HotelBranches;