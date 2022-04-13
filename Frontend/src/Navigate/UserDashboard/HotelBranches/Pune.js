import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "../../../Common/Common";
import Footer from "../../../Footer"











const Pune = () =>{

    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [quantity, setquantity] = useState('')
    const [adults, setadults] = useState('')
    const [childs, setchilds] = useState('')
    const uid = localStorage.getItem("id")
    const city = 'Pune'
    


    const addBooking = (e) => {
            e.preventDefault()
            const data = new FormData()
            data.append('start_date', start_date)
            data.append('end_date', end_date)
            data.append('quantity', quantity)
            data.append('adults', adults)
            data.append('childs', childs)
            data.append("city",city)
            
            


            //console.log(data.firstname,data.lastname);
            console.log(""+data)

            axios.post(url + '/booking/book/'+ uid , data).then((response) => {
                const result = response.data
                alert(response.data.status)
                if (result.status === 'success') { 
                    // alert("Booking Successfull!")
                    // const quant = parseInt(result.quantity)
                    localStorage.setItem("quantity",result.data.quantity)
                    localStorage.setItem("bookId",result.data.id)
                    
                     window.location = "/Transaction"
                 } else {
                     console.log(result.error)
                     alert('Booking failed! Try again')
                 }
            });
        }
    


    return(
<div>
<div>
            {/* <HNavbar /> */}

            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Booking Details</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <h5>Check-In :</h5>
                                <div className="input-group form-group">
                                <input type="date"  id = "CI" className="form-control" placeholder="Check-IN" onChange={(e) => { setStart_date(e.target.value) }} />
                                </div>
                                <h5>Check-Out :</h5>
                                <div className="input-group form-group">
                                    <input type="date" className="form-control" placeholder="Check-Out" onChange={(e) => { setEnd_date(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="number" className="form-control" placeholder="Select Quantity" onChange={(e) => { setquantity(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="number" className="form-control" placeholder="No.of Adults" onChange={(e) => { setadults(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="number" className="form-control" placeholder="No.of Childs" onChange={(e) => { setchilds(e.target.value) }} />
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="btn float-right login_btn" onClick={addBooking} ><a href = '/Transaction'>Book</a></button>
                                </div>
                                
                            </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Pune;