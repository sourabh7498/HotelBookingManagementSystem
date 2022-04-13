import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "../Common/Common";
const Transaction = () => {
    
    const [amount, setAmount] = useState("")
    const quantity = localStorage.getItem("quantity")
    const id = localStorage.getItem("id") 
    const bookId = localStorage.getItem("bookId")
    const payment = (e) => {
        e.preventDefault();
        console.log(quantity)
        console.log(bookId)
        console.log(amount)
            const data = new FormData()
            data.append('amount', amount)
            data.append('userid', id)
            data.append('bookId', bookId)
            //console.log(data.firstname,data.lastname);
            
            axios.post(url + '/transaction/payment' , data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    alert("Payment Succesful")
                    alert("Booking Successfull!")
                   // alert("Transaction Id : "+result.id)
                    window.location = '/Booking'
                    
                } else {
                    console.log(result.error)
                    alert('Payment Failed ! Try again')
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
                            <h3>Payment Details</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Card Number" />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="CVV"  />
                                </div>
                                <h3>Total Amount : </h3>
                                <div className="input-group form-group">
                                    <input type="number" className="form-control" placeholder={Number(quantity*2500)} onChange={() => { setAmount(Number(quantity) * 2500) }}  />
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="btn float-right login_btn" onClick={payment} >Pay</button>
                                </div>
                                
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;