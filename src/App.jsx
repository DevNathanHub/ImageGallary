import React from 'react'
import Gallary from './Components/Gallary/Gallary'

function App() {
  const handleClick = () => {
    return <Gallary/>;
  }
  return (
    <div>
      <h1>Image Gallary</h1>
      <button>Upload Image(s)</button>
      <button onClick={handleClick}>View All Images</button>
    </div>
  )
}

export default App