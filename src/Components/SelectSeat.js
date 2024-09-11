import React from 'react'
import { seats } from '../Data'
import Seatlnputs from './Seatlnputs'
import '../CSS/SelectSeats.css'

const SelectSeat = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats :</h1>
      <div className='SS_main_container'>
        {seats.map((el,index) => {
          return(
           <Seatlnputs key ={index} text={el}/>
          )
        })}
      </div>      
    </div>
  )
} 
export default SelectSeat


