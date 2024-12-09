import React from 'react'
import Home from './Pages/Home'
import Navbar from './Pages/Components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Home />
    </div>
  )
}

export default App