import './App.css'
import { AppContext, AppProvider } from './Context/AppContext.tsx';
import { Footer } from './Footer/Footer.tsx';

import { Home } from "./Home/Home.tsx";
import { Nav } from "./Nav/Nav.tsx";

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
   
      <div className='index'>
        <AppProvider>
        <Nav/>
        
        <Routes>
    
          <Route path='/' element={<Home />} />

        </Routes>

        <Footer />
        </AppProvider>
      </div>
  
  )
}

export default App
