import React from 'react'
import '../CSS/RadioComponent.css'

const RadioComponent = ({text}) => {
  return (
    <div className='form-check-lable'>
      <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent
