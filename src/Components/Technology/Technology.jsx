import React from 'react'
import data from './TechData'
const Technology = () => {
  return (
    <div className='Technology pt-40 bg-black shadow-lg ' >
      <div className=' flex justify-center items-center py-20'>
        <img className='bounceImg h-96 w-96 rounded-full animate-bounce' src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWNlJTIwY3JhZnR8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
      <div className=' text-gray-300 p-10 max-w-[80%] max-sm:max-w-[97%]'>
        <h1 className=' text-5xl font-bold max-sm:text-3xl'>Some Technologies Needed for a Spacecraft to Survive in Deep Space</h1>
      </div>
      <div className=' text-gray-400 max-w-[70%] p-12 font-semibold text-lg max-sm:max-w-[95%]'>
        <p className=' pb-6'>When a spacecraft built for humans ventures into deep space, it requires an array of features to keep it and a crew inside safe. Both distance and duration demand that spacecraft must have systems that can reliably operate far from home, be capable of keeping astronauts alive in case of emergencies and still be light enough that a rocket can launch it.</p>

        
        <p className=' pt-6'>Artemis Missions near the Moon will start when NASA’s Orion spacecraft leaves Earth atop the world’s most powerful rocket, NASA’s Space Launch System. After launch from the agency’s Kennedy Space Center in Florida, Orion will travel beyond the Moon to a distance more than 1,000 times farther than where the International Space Station flies in low-Earth orbit, and farther than any spacecraft built for humans has ever ventured. To accomplish this feat, Orion has built-in technologies that enable the crew and spacecraft to explore far into the solar system.</p>
      </div>

      {data.map((Tdata)=>(
        <div className=' p-10'>
           <h1 className=' text-3xl text-white font-bold'>{Tdata.heading}</h1>
           <p data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='100' data-aos-offset='0' className=' text-xl max-w-[90%] text-gray-400/55 py-4'>{Tdata.details}</p>
        </div>
      ))}

    </div>
  )
}

export default Technology
