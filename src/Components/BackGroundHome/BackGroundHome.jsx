import React from 'react'
import bgVideo from '../../assets/earth-bg.mp4'

const BackGroundHome = () => {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        className=' fixed right-0 top-0 h-[700px] w-full object-cover z[-1]'
        >
        <source src={bgVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default BackGroundHome
