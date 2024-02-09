import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer';

const App = () => {

  React.useEffect(()=>{
    AOS.init(
      {
        duration:1200,
        easing : "ease-in-out",
      }
    );
  },[])


  return (
    <div>
      <div className=' h-[700px]'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
