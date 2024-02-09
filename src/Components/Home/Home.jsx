import React from 'react'
import BackGroundHome from '../BackGroundHome/BackGroundHome'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Banner1 from '../Banners/Banner1'
import Banner2 from '../Banners/Banner2'
import Banner3 from '../Banners/Banner3'
import Preloader from '../Preloader/Preloader'

const Home = () => {
  return (
    <>
      <Preloader />
      <BackGroundHome />
      <Hero/>
      <Services />
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </>
  )
}

export default Home
