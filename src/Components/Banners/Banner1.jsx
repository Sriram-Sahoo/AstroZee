import React from 'react'
import { Link } from 'react-router-dom'
import satelite1 from '../../assets/satelite1.jpg'
const Banner1 = () => {
  return (
    <div className='bg-black text-white pb-8 relative z-50'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
                <img data-aos="zoom-in" src={satelite1} alt="" />
            </div>
            <div className=' space-y-4  xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-700 border-b-sky-700'>

                <p data-aos="fade-up" className=' text-sky-300 font-bold text-lg'>OUR MISSION.</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className=' text-5xl'>SATELITES</h1>

                <p className=' text-gray-300' data-aos="fade-up"data-aos-delay="500">A satellite or artificial satellite[a] is an object, typically a spacecraft, placed into orbit around a celestial body. Satellites have a variety of uses, including communication relay, weather forecasting, navigation (GPS), broadcasting, scientific research, and Earth observation. Additional military uses are reconnaissance, early warning, signals intelligence and, potentially, weapon delivery. Other satellites include the final rocket stages that place satellites in orbit and formerly useful satellites that later become defunct. .......</p>
                <button data-aos="fade-up"data-aos-delay="700" className='primary-button'>
                  <Link to='/Satelite'>Know More</Link>
                </button>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Banner1
