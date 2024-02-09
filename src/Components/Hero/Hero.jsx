import React from 'react'
import surface from '../../assets/surface.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=' bg-black/20 h-full text-white relative z-50 '>
      <div className="h-full flex items-center justify-center p-4 ">
        <div className="container grid grid-cols-1
        sm:grid-cols-2 gap-4">
            <div className=' space-y-4 lg:pr-36'>
                <h1 data-aos="fade-up" className='  text-5xl font-bold'>Orbit The Earth</h1>
                <p className=' text-xl' data-aos="fade-up" data-aos-delay="300">Embark on a celestial odyssey with <span className=' font-bold text-2xl'>Astro<span className=' text-sky-400'>Zee</span></span>, where each click propels you deeper into the cosmos. Uncover the beauty of galaxies, navigate through stardust, and ignite your passion for space exploration on our stellar platform.</p>
                  <button 
                   data-aos="fade-up" data-aos-delay="500"
                   className=' bg-blue-400 hover:bg-blue-500 py-2 px-6 rounded-xl duration-300 font-semibold text-lg '>
                    <Link to='/Satelite'>               
                     Explore
                    </Link>
                  </button>
            </div>
        </div>

      </div>

      {/* the mountain section */}

      <img src={surface} 
      className=' absolute right-0 bottom-0 w-full brightness-50 z-10 '
      />

      {/* bottom gradient section */}
      
      <div className=' absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[63px]'></div>
    </div>
  )
}

export default Hero
