import './App.css'
import { Footer } from './Footer/Footer.tsx';

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

        <Footer />
  
      </div>
  
  )
}

export default App
