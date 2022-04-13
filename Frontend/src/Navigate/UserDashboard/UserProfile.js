import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../Common/Common"
import Navbar from "../Navbar";
import Footer from "../../Footer"
import "../UserDashboard/UserProfile.css"

const UserProfile = () =>{
        // const [firstname, setFirstname] = useState("")
        // const [lastname, setLastname] = useState("")
        // const [address, setAddress] = useState("")
        // const [mobilenumber, setMobilenumber] = useState("")
        
        const uid = localStorage.getItem("id")
        const [user , setUser] = useState("")
        useEffect(()=>{
        getUser()  
  },[]) //"[]" : Used to prevent recursive call to the getUser
    const getUser = () => {
        
    axios.get(url + '/user/userprofile/' + uid).then((response) => {
        const result = response.data
            if (result.status === 'success') {
                console.log(result.data)
                setUser(result.data)
            } else {
                console.log(result.error)
            }
        //alert(result.firstname)
        //alert(result.data.lastname)
    })
}


    return(
        <div>
        <div>
            <Navbar/>
        </div>
        <h2 class="text-center">User Profile</h2>
        <br></br>
        <div className ="container">
        <table id="User" className="table table-striped ">
            <tbody>
            
            <tr>
                <td>Name </td>
                <td >{user.firstname} {user.lastname}</td>
            </tr>
            <tr>
                <td>Address </td>
                <td >{user.address}</td>
            </tr>
            <tr>
                <td>Email </td>
                <td >{user.email}</td>
            </tr>
            <tr>
                <td>Mobile Number  </td>
                <td >{user.mobilenumber}</td>
            </tr>

                    <tr >
                    <Link to='/Profile'>
                        <td><button>Update</button></td>
                        </Link>
                    </tr>
                </tbody>
        </table>
        </div>

        {/* <Link to='/dashboard'>
            <a className="btn btn-warning btn1">Back</a>
        </Link> */}
        <br></br>
        <br></br>
        <div>
        <Footer/>
        </div>
        

    </div>
            
    )
}
export default UserProfile