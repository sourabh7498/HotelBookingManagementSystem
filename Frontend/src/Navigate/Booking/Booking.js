import '../Booking/Booking.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../Common/Common';
import Navbar from '../Navbar';
import Footer from '../../Footer';


const Booking = () => {
    
    const [booking, setBookings] = useState([])
    const uid = localStorage.getItem("id")
    // const userEmail = sessionStorage.getItem('userEmail')
    // const userAddress = sessionStorage.getItem('address')
    console.log("ID : "+uid)
   // console.log(userAddress)

    useEffect(() => {
        getAllBooking()
    }, [])


    const getAllBooking = () => {


        axios.get(url + '/booking/allbookings/' + uid).then((response) => {
            const result = response.data
            // console.log("transaction id : "+result.transaction.id)
            if (result.status === 'success') {
                setBookings(result.data)
            } else {
                console.log(result.error)
            }
        })
    }


    return (
        <div>
            <div>
                <div>
                    <Navbar />
                </div> 
                <h2 class="text-center">Booking Details</h2>
                <div className ="container">
                
                <table id="bookings" className="table table-striped ">
                    <tr>
                        <th>Hotel Name</th>
                        <th>City</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        {/* <th>Address</th> */}
                        <th>Room-Quantity</th>
                        <th>Transaction-id</th>
                    </tr>

                    {booking.map((book) => {
                        return (
                            
                            <tr >
                                <td >Hotel Good Vibes</td>
                                <td>{book.city}</td>
                                <td >{book.start_date}</td>
                                <td >{book.end_date}</td>
                                <td >{book.quantity}</td>
                                <td>{book.transaction.id}</td>
                            </tr>
                            
                        )
                    })}


                </table>
                </div>
                <div>
                     
                </div>
            </div>
            <Link to='/UserProfile'>
                <button>Back</button>
            </Link>
              <br></br>  
              <br></br> 
              <br></br> 
              <br></br>  
              <br></br>
            <Footer/>
        </div>

    )
}

export default Booking;