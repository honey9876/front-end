import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBookingDetails from '../Components/LastBookingDetails'
import SelectSeat from '../Components/SelectSeat'
import TimeSchedule from '../Components/TimeSchedule'
import '../CSS/Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
       <div className='select_movie_component'>
           <SelectMovie/>
            </div>
        <div className='last_booking_deatils_container'> 
             <LastBookingDetails/>
        </div>
      </div>
      <div className='time_seats_container'>
        <TimeSchedule/>
        <SelectSeat/>
         <button className='BN-btn'>BOOK NOW</button>
      </div>
         
    </div>
  )
}

export default Home
