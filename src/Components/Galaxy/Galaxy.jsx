import React, { useRef } from 'react'
import GalaxyVdo from '../Galaxy/GalaxyVdo.webm'
import { motion , useScroll } from "framer-motion";

const Galaxy = () => {


     const constraintsRef = useRef(null);



    //  For horizontal Scrolling

     const ref = useRef(null);
     const { scrollXProgress } = useScroll({ container: ref });


  return (
    <div className='GalaxyBody pt-24'>
        
       <div className='GalaxyContent text-indigo-300 flex flex-col gap-14 px-5 py-20'>

        <motion.div className=" flex items-center gap-4 w-[80%] p-14 bg-gray-900 rounded-3xl" ref={constraintsRef}>
            <h1 className=' text-7xl max-sm:text-4xl text-yellow-600'>GALAXY</h1>
            <motion.img src='https://images.unsplash.com/photo-1610208645766-b39debd72c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE1fHxnYWxheHl8ZW58MHx8MHx8fDA%3D' className=" w-32 h-32 rounded-full cursor-pointer" drag dragConstraints={constraintsRef}/>

        </motion.div>
 
         <div className='GalaxyTop'>
          <p>A galaxy is a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity.[1][2] The word is derived from the Greek galaxias (γαλαξίας), literally 'milky', a reference to the Milky Way galaxy that contains the Solar System. Galaxies, averaging an estimated 100 billion stars,[3] range in size from dwarfs with less than a hundred million stars, to the largest galaxies known – supergiants with one hundred trillion stars, each orbiting its galaxy's center of mass. Most of the mass in a typical galaxy is in the form of dark matter, with only a few percent of that mass visible in the form of stars and nebulae. Supermassive black holes are a common feature at the centres of galaxies.</p>
          <p>Galaxies are categorized according to their visual morphology as elliptical,[4] spiral, or irregular.[5] Many are thought to have supermassive black holes at their centers. The Milky Way's central black hole, known as Sagittarius A*, has a mass four million times greater than the Sun.[6]</p>
          <p>It is estimated that there are between 200 billion[7] (2×1011) to 2 trillion[8] galaxies in the observable universe. Most galaxies are 1,000 to 100,000 parsecs in diameter (approximately 3,000 to 300,000 light years) and are separated by distances on the order of millions of parsecs (or megaparsecs). For comparison, the Milky Way has a diameter of at least 26,800 parsecs (87,400 ly) and is separated from the Andromeda Galaxy (with diameter of about 152,000 ly), its nearest large neighbor, by 780,000 parsecs (2.5 million ly.)</p>

          <p>The space between galaxies is filled with a tenuous gas (the intergalactic medium) with an average density of less than one atom per cubic meter. Most galaxies are gravitationally organized into groups, clusters and superclusters. The Milky Way is part of the Local Group, which it dominates along with the Andromeda Galaxy. The group is part of the Virgo Supercluster. At the largest scale, these associations are generally arranged into sheets and filaments surrounded by immense voids.[9] Both the Local Group and the Virgo Supercluster are contained in a much larger cosmic structure named Laniakea.[10]</p>
         </div>

       </div>



       <div>
         <div className='flex justify-center items-center cursor-pointer relative py-5'>
          <img className='GalaxyImg w-[95%] h-[60vh] absolute z-[1]  hover:hidden rounded-3xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/465px-NGC_4414_%28NASA-med%29.jpg" alt="" />

          <video  
           loop
           autoPlay
           muted
           className='GalaxyVdo h-[60vh] w-[95%] object-cover relative rounded-3xl'
          >
            <source className=' h-[100%]' src={GalaxyVdo} type='video/webm' />
          </video>
         </div>
       </div>

        {/* CONTENT */}



      

      <div className=' py-12 px-16 relative'>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul className='GalaxySlider' ref={ref}>
        <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1592035659284-3b39971c1107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://plus.unsplash.com/premium_photo-1679323249079-35ee7a05d137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1614926037384-4159c33e196b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1543719621-92ebcae62483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1515651571008-95427bed8e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxnYWxheHl8ZW58MHx8MHx8fDA%3D" alt="" />
      </ul>

      </div>


      <div className=' flex items-center justify-center py-28'>
        <div className=' p-6 rounded-full bg-slate-800 cursor-pointer animate-bounce'>
        <i class="ri-arrow-down-line text-sky-700 text-4xl"></i>
        </div>
      </div>

    </div>
  )
}

export default Galaxy
