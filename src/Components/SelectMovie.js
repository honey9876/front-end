import React from 'react'
import { movieList } from '../Data'
import RadioComponent from './RadioComponent'
import '../CSS/selectMovie.css'
import BsContext from '../Context/BsContext'
import react, { useContext } from 'react';


 
const SelectMovie = () => {
  const context = useContext(BsContext);

 
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;

