import '../Navigate/Booking/Booking.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../Common/Common';



const Revenue = () => {
    
    const [revenue, setRevenue] = useState()

    useEffect(() => {
        getRevenue()
    }, [])


    const getRevenue = () => {


        axios.get(url + '/admin/revenue' ).then((response) => {
            const result = response.data
            // console.log("transaction id : "+result.transaction.id)
            if (result.status === 'success') {
                setRevenue(result.data)
            } else {
                console.log(result.error)
            }
        })
    }


    return (
            <div> 
                <h3 class="text-center">Revenue : Rs {revenue} /-</h3>
            </div>

    )
}

export default Revenue;