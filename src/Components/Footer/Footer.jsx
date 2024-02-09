import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
// import {MdMessage , MdCall} from 'react-icons/Md'

const Footer = () => {
  return (
    <div className=' bg-gray-900/80 backdrop-blur-md text-white relative z-50'>
      <section className=' max-w-[1200px] mx-auto px-5'>
        <div className=' grid md:grid-cols-3 py-5'>

            {/* First column */}
            <div className='px-8 py-7'>
                <h1 className=' font-bold text-2xl sm:text-3xl sm:text-left text-justify mb-3'>Be Ready To Grow</h1>
                <p>Get Exclusive <span className=' font-bold'>Update</span> straight to your Inbox .</p>
                <div className='mt-5 flex items-center h-10'>
                    <input type="text"
                    className=' py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500 bg-gray-700 border-2 border-gray-400 rounded-md'
                    placeholder='Email'
                    />
                    <button className='primary-button'>Submit</button>
                </div>
                
            </div>

            {/* Second Column */}
            <div className=' grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                
                <div>
                    <div className=' py-8 px-4 '>
                        <h1 className=' font-bold text-xl mb-3'>Quick Links</h1>
                        <ul className='flex flex-col gap-3 '>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' py-8 px-4 '>
                        <h1 className=' font-bold text-xl mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3 '>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Details</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' py-8 px-4 '>
                        <h1 className=' font-bold text-xl mb-3'>Contact Us</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <HiLocationMarker />
                        <p className=' font-semibold'>Puri , Odisha</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        {/* <MdMessage /> */}
                        <p className=' font-semibold'> abc@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        {/* <MdCall /> */}
                        <p className=' font-semibold'>+91 67453890</p>
                    </div>
                    
                </div>

            </div>
                
                

        </div>
      </section>
    </div>
  )
}

export default Footer
