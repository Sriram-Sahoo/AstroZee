import React from 'react'
import satelite2 from '../../assets/satelite2.jpg'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-8 relative z-50'>
    <div className='container'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className='space-y-4  xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-700 border-b-sky-700'>

              <p data-aos="fade-up" className=' text-sky-300 font-bold text-lg'>OUR MISSION.</p>
              <h1 data-aos="fade-up"data-aos-delay="300" className=' text-5xl'>KNOWLEDGE</h1>

              <p className=' text-gray-300' data-aos="fade-up"data-aos-delay="500">When a spacecraft built for humans ventures into deep space, it requires an array of features to keep it and a crew inside safe. Both distance and duration demand that spacecraft must have systems that can reliably operate far from home, be capable of keeping astronauts alive in case of emergencies and still be light enough that a rocket can launch it. ........
            </p>
              <button data-aos="fade-up"data-aos-delay="700" className='primary-button'>
                <Link to='/Technology'>Know More</Link>
              </button>
          </div>
          <div>
              <img data-aos="zoom-in" src={satelite2} 
              className=' w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
              />
          </div>
      </div>
    </div>
    </div>
  )
}

export default Banner2
