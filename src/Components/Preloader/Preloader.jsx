import React, { useEffect, useState } from 'react'
import { gsap , CSSPlugin , Expo } from "gsap";
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(CSSPlugin);

const Preloader = () => {

    const [counter, setcounter] = useState("0");
    // const [count, setcount] = useState(0);

    useEffect(()=>{
          const count = setInterval(() => {
            
            setcounter((counter)=>{
                counter<100 ? setcounter(counter++) : clearInterval(count),setcounter(100),reveal()
            });
        },25);
    },[counter])


   const reveal = () =>{
      const t1 = gsap.timeline({
        onComplete:()=>{
          console.log("complete");
        },
      })
      
      t1.to(".follow",{
        width:"100%",
        duration:.08,
        delay:0.7,
        ease:Expo.easeInOut
      }).to(".hide",{
        opacity:0,
        duration:.8,
      }).to(".hide",{
        display:"none",
        duration:0.3,
      })
      .to(".follow",{
        height:"100%",
        duration:0.7,
        // delay:0.3,
        // ease:Expo.easeInOut
      })
      .to(".loading",{
        width:0,
        duration:1.3,
        delay:.3,
      }).to(".loading",{
        opacity:0,
        duration:.2
      })
   }

    
  return (
    <>
      <div className='loading'>
         <div className='follow'>

         </div>
         <div className='hide progressBar' style={{width:counter+"%"}}>
          
         </div>
         <div className='hide count'>{counter}%</div>
      </div>
    </>
  )
}

export default Preloader


