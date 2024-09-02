import React from 'react'
import SelectMovie from '../Components/SelectMovie'

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
       <div className='select_movie_component'>
           <SelectMovie/>
            </div>
        <div className='last_booking_deatils_container'> 
             last Booking
        </div>
      </div>
      <div className='time_seats_container'>
        Time Schedule
        Select Seats
         <button>BOOK NOW</button>
      </div>
         
    </div>
  )
}

export default Home
