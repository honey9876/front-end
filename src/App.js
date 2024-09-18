// import React from 'react'
// import Home from './pages/Home'
// import BsState from './Context/BsState'; // Adjust the path as needed


// const App = () => {
//   return (
//     <div>
//       <BsState>
//         <Home/> 
//       </BsState>
//      <Home/> 
      
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import BsState from './Context/BsState';
import Home from './pages/Home'
import SelectMovie from './Components/SelectMovie';
import BsContext from './Context/BsContext';

const App = () => {
  const [movie, setMovie] = useState(null);

  const changeMovie = (newMovie) => {
    setMovie(newMovie);
  };

  return (
    <BsContext.Provider value={{ movie, changeMovie }}>
      <SelectMovie />
      <BsState>
//         <Home/> 
//       </BsState>
    </BsContext.Provider>
  );
};

export default App;
