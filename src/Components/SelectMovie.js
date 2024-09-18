import React, { useContext } from 'react';
import { MovieList } from '../data';
import RadioComponent from './RadioComponent';
import '../CSS/selectMovie.css';
import BsContext from '../Context/BsContext';


 
// const SelectMovie = () => {
//   const context = useContext(BsContext);

 
//   const { movie, changeMovie } = context;

//   const handleChangeMovie = (value) => {
//     changeMovie(value);
//     window.localStorage.setItem("movie", value);
//   };

//   return (
//     <>
//       <h1 className="SM_heading">Select a Movie :-</h1>
//       <div className="SM_main_container">
//         {MoviesList.map((el, index) => {
//           return (
//             <RadioComponent
//               text={el}
//               changeSelection={handleChangeMovie}
//               data={movie}
//               key={index}
//             />
//           );
//         })}//
//       </div>
//     </>
//   );
// };

// export default SelectMovie;




// import React, { useContext } from 'react';
// import { MovieList } from '../Data';
// import RadioComponent from './RadioComponent';
// import '../CSS/selectMovie.css';
// import BsContext from '../Context/BsContext';

const SelectMovie = () => {
  const context = useContext(BsContext);


  if (!context) {
    return <div>Error: Context not provided</div>;
  }

  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);
    window.localStorage.setItem('movie', value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {MovieList.map((el, index) => {
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
