import React from 'react'
import { seats } from '../Data'
import '../CSS/LastBookingDetails.css'

const LastBookingDetails = () => {
  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
      <div className='seats_container'>
       <p className='seats_header'>Seats:</p>
          <ul className='seats'>
             {seats.map((seats,index) =>{
              <li className='seat_value' key={index}>
                (seat) : 0
               </li>
            })}
          </ul> 
        </div>
        <p className='slot' style={{textAlign:"left"}}> Slot :00:00 AM <span></span> </p>
        <p className='movie'> Movie: <span>Tent</span></p>
      </div>
  )
}

export default LastBookingDetails
