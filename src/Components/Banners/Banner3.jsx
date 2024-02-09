import React from 'react'
import satelite1 from '../../assets/satelite1.jpg'
import { Link } from 'react-router-dom'

const Banner3 = () => {
  
    return (
    <div className='bg-black text-white pb-8 relative z-50'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
                <img className=' h-[48vh] w-[38vw] max-sm:w-[100%]' data-aos="zoom-in" src='https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D' alt={satelite1} />
            </div>
            <div className=' space-y-4  xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-700 border-b-sky-700'>

                <p data-aos="fade-up" className=' text-sky-300 font-bold text-lg'>OUR MISSION.</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className=' text-5xl'>GALAXY</h1>

                <p className=' text-gray-300' data-aos="fade-up"data-aos-delay="500">A galaxy is a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity.[1][2] The word is derived from the Greek galaxias (γαλαξίας), literally 'milky', a reference to the Milky Way galaxy that contains the Solar System. Galaxies, averaging an estimated 100 billion stars,[3] range in size from dwarfs with less than a hundred million stars, to the largest galaxies known – supergiants with one hundred trillion stars, each orbiting its galaxy's center of mass. . . . . . . .</p>
                <button data-aos="fade-up"data-aos-delay="700" className='primary-button'>
                  <Link to='/Galaxy'>Know More</Link>
                </button>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Banner3
