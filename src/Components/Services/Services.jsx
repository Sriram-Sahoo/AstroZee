import React from 'react'
import {FaReact} from 'react-icons/fa'
import {FaShuttleSpace,FaSpaceAwesome} from 'react-icons/fa6';
import wave from '../../assets/wave Gif.gif';




const Services = () => {

    const serviceData = [
        {
            tittle:"HST",
            content:"300-1500km",
            description:"Used for Astronomical observations,capturing stunning images of the universe .",
            icon:<FaReact className="text-7xl "/>,
            aosDelay:"300"
        },
        {
            tittle:"ISS",
            content:"500-1500km",
            description:"Used for Astronomical observations,capturing stunning images of the universe .",
            icon:<FaShuttleSpace className="text-7xl "/>,
            aosDelay:"500"
        },
        {
            tittle:"GPS",
            content:"300-1500km",
            description:"Used for Astronomical observations,capturing stunning images of the universe .",
            icon:<FaSpaceAwesome className="text-7xl "/>,
            aosDelay:"700"
        }
    ]
  return (
    <div className=' bg-black text-white relative z-50 '>
      <div className="container">
        <div className=' min-h-[400px]'>
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                {
                serviceData.map((data) => (
                    
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} className=' min-h-[180px] flex flex-col justify-center gap-3.5 items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-10 px-3 w-full lg:w-[300px] mx-auto'>
                        {data.icon}
                        <h1>{data.tittle}</h1>
                        <p>{data.content}</p>
                        <p className=' text-sm'>{data.description}</p>

                    </div>
                )
                )
              }
            </div>
            <img src={wave} 
            className=' h-[200px] w-full object-cover mix-blend-screen relative -translate-y-24 z-[0]'
            />
        </div>
      </div>
    </div>
  )
}

export default Services
