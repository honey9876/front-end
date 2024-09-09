import React from 'react'
import { movieList } from '../Data'
import RadioComponent from './RadioComponent'
import '../CSS/selectMovie.css'
const SelectMovie = () => {
  return (
    <>
    <h1 className='SM_heading'> select A movie :-</h1>
    <div className='SM_main_container'>


        {movieList.map((el,index) => {
            return (
                <RadioComponent text={el} key={index}/>
            )
        })}
    </div>
      
    </>
  )
}


export default SelectMovie
