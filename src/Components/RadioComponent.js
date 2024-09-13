import React from 'react'
import '../CSS/RadioComponent.css'

const RadioComponent = ({text, changeSelection,data}) => {
  
  const handleChecked = (val) => {
    changeSelection(val)
  }

  return (
    <div nama={text} className= {`form-check-lable ${data == text ? "active" : 
    "inactive"}`} onClick={() => {handleChecked (text)}}>
      <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent
