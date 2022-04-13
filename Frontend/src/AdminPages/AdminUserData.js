import '../Navigate/Booking/Booking.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../Common/Common';
import AdminNavbar from './AdminNavbar';
import Footer from '../Footer';


const AdminUserData = () => {
    
    const [users, setUsers] = useState([])
    // const uid = localStorage.getItem("id")
    // const userEmail = sessionStorage.getItem('userEmail')
    // const userAddress = sessionStorage.getItem('address')
   // console.log("ID : "+uid)
   // console.log(userAddress)

    useEffect(() => {
        getAllUsers()
    }, [])


    const getAllUsers = () => {


        axios.get(url + '/admin/getallusers' ).then((response) => {
            const result = response.data
            // console.log("transaction id : "+result.transaction.id)
            if (result.status === 'success') {
                setUsers(result.data)
            } else {
                console.log(result.error)
            }
        })
    }


    return (
        <div>
            <div>
                <div>
                    <AdminNavbar />
                </div> 
                <h2 class="text-center">User Details</h2>
                <div className ="container">
                
                <table id="bookings" className="table table-striped ">
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                    </tr>

                    {users.map((user) => {
                        return (
                            
                            <tr >
                                <td>{user.id}</td>
                                <td>{user.firstname} {user.lastname}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.mobilenumber}</td>
                            </tr>
                            
                        )
                    })}


                </table>
                </div>
                <div>
                     
                </div>
            </div>
                <br></br>
                <br></br>  
                <br></br> 
                <br></br> 
                <br></br>  
                <br></br>
            <Footer/>
        </div>

    )
}

export default AdminUserData;