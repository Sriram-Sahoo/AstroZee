import React from 'react'
import Data from './SateliteData'

const Satelite = () => {
  return (
    <div className='bgSatelite bg-gray-800 text-white overflow-hidden h-fit '>

      <div className=' relative top-20 text-white'>
         <div className=' p-8 py-24 flex justify-around flex-wrap  max-lg:flex-col-reverse max-lg:justify-center max-lg:gap-12 max-lg:items-center '>
            <div className=' max-w-96 flex flex-col gap-8 '>
              <h1 className=' text-5xl text-blue-600 font-semibold text-center'>The Most Influential Satellites in Remote Sensing</h1>
              <p className=' text-gray-400 text-center' > Join us on a journey through space and technology as we delve into the remarkable satellites that have paved the way in remote sensing.From weather forecasts to precise positioning, here are the 50 most iconic satellites orbiting in space.</p>
              <h2 className='topPara text-2xl'>Let’s get started orbiting....</h2>
            </div>
            <div className=' animate-spin'>
              <img className='TopSpin h-96 w-96 rounded-[50%]' src="https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjByZWxhdGVkJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
          </div>  
  
        {Data.map((e)=>(
          <div className=' container border-b-2 border-b-gray-700 p-7'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 items-center ">
            <div className=' opacity-70'>
                <img className=' rounded-lg shadow-lg hover:animate-pulse' data-aos="zoom-in" src={e.Pic} alt="" />
            </div>
            <div className=' space-y-4  xl:pr-36 p-4 '>

                <h1 data-aos="fade-up" data-aos-delay="100" className=' text-5xl'>{e.Name}</h1>

                <p data-aos="fade-up"data-aos-delay="300"
                  className=' text-gray-300'
                >{e.Detail}</p>
                <button data-aos="fade-up"data-aos-delay="400" className='secondary-button'>Know More</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Satelite
