import React from 'react'
import '../CSS/SeatInputs.css';


const Seatlnputs = ({key,text}) => {
  return (
    <div className='form-check-lable'>
        <span className='text'>{text}</span>
        <input type='number'className='seats-input' placeholder='0' max="30" min="0" />             
    </div>
  )
}

export default Seatlnputs
