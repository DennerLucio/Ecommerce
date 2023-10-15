import { useState } from 'react'
import './App.css'
import { Home } from "./Home/Home.tsx";
import { Nav } from "./Nav/Nav.tsx";

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
   
      <div className='index'>
        <Nav/>
        
        <Routes>
    
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
  
  )
}

export default App
