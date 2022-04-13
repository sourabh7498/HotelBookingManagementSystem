import { Link } from "react-router-dom";
import { useState } from "react";
import { url } from "../../../Common/Common";
import axios from "axios";
import Navbar from "../../Navbar";
import { tid } from "../../SignIn";



const Profile = () => {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [mobilenumber, setMobilenumber] = useState("")
    const [password, setPassword] = useState("")

    const uid = localStorage.getItem("id")

    const updateProfile = () => {
        const data = new FormData()
        data.append('firstname', firstname)
        data.append('lastname', lastname)
        data.append('email', email)
        data.append('mobilenumber', mobilenumber)
        data.append('password', password)
        data.append('address', address)


        axios.put(url + '/user/updateuser/' + uid, data).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert('Profile updated Successfully!')
            } else {
                console.log(result.error)
                alert('Update Failed!...Please try again!')
            }
        })
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="profile1 p-3 mb-2 bg-secondary text-white">
                            <form className="form-control">
                                <h3 className="user">Enter Info</h3>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input  type="text" className="form-control" placeholder="Enter First Name" onChange={(e) => {
                                        setFirstname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input  type="text" className="form-control" placeholder="Enter Last Name" onChange={(e) => {
                                        setLastname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input  type="email" className="form-control" placeholder= "Enter Email" onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input  type="text" className="form-control" placeholder="Enter mobile Number" onChange={(e) => {
                                        setMobilenumber(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Change Password" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div><br />

                                <div className="form-group">
                                    <label>Address</label>
                                    <input  type="text" className="form-control" placeholder="Enter Address"  onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}/>
                                </div><br />
                                <div className="button2">
                                    <button type="submit" className="btn-primary btn btn-success" onClick={updateProfile} ><a href= '/UserProfile'>Edit</a></button>
                                    <Link to="/UserProfile">
                                        <a className="btn btn-warning">Back</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>

            
        </div >
    )
}

export default Profile;