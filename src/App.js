import React from 'react'
import Home from './pages/Home'
import BsState from './Context/BsState'; // Adjust the path as needed


const App = () => {
  return (
    <div>
      <BsState>
        <Home/> 
      </BsState>
     <Home/> 
      
    </div>
  )
}

export default App
