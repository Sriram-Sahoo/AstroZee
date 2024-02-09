import React, { useRef } from 'react'
import logo from '../../assets/logo.png'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {

    const NavRef = useRef();

    const showNavBar = () =>{
      NavRef.current.classList.toggle("responsive_nav");
    }

  return (
    <div data-aos="fade-down" className=' fixed top-0 right-0 w-full 
    z-[100] bg-black/10 backdrop-blur-sm py-4 px-3'>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="flex text-white items-center gap-3 font-extrabold text-3xl ">
                <Link to='/'>
                <img src={logo} alt=""
                className=' w-10'
                />
                </Link>
                 <span><Link to='/'>Astro<span className=' text-sky-500'>Zee</span></Link></span>
            </div>
            <nav className='NavList font-extrabold'>
                <ul className='flex items-center gap-12 text-2xl py-4 sm:py-0' ref={NavRef}>
                    <li>
                    <NavLink to='/Satelite'
                              className={({isActive})=> 
                              `${isActive?"bg-blue-600/30 px-4 py-2 rounded-2xl text-sky-200":"text-sky-200 hover:border-b-[3px] hover:border-sky-300 hover:ease-out hover:duration-100 pb-1"}`}
                    >Satelite</NavLink>
                    </li> 
                    <li>
                      <NavLink 
                      to='/Technology'
                      className={({isActive})=> 
                              `${isActive?"bg-blue-600/30 px-4 py-2 rounded-2xl text-sky-200":"text-sky-200 hover:border-b-[3px] hover:border-sky-300 hover:ease-out hover:duration-100 pb-1"}`}
                      >Technology</NavLink>
                    </li>
                    <li>
                      <NavLink
                       to='/Galaxy'
                       className={({isActive})=> 
                              `${isActive?"bg-blue-600/30 px-4 py-2 rounded-2xl text-sky-200":"text-sky-200 hover:border-b-[3px] hover:border-sky-300 hover:ease-out hover:duration-100 pb-1"}`}
                      >Galaxy</NavLink>
                      
                    </li>

                      {/* Hold for Now */}
                    {/* <li>
                    <NavLink 
                      to='/About'
                      className={({isActive})=> 
                              `${isActive?"bg-blue-600/30 px-4 py-2 rounded-2xl text-sky-200":" text-sky-200 hover:border-b-[3px] hover:border-sky-300 hover:ease-out hover:duration-100 pb-1"}`}
                      >About</NavLink>
                    </li> */}


                    <button onClick={showNavBar} className='NavIcon NavCloseIcon text-blue-200 text-5xl'>
                      <i className="ri-close-circle-line text-blue-200"></i>          {/*For close menu list (Responsive) */}
                    </button>
                </ul>
            </nav>
            <button className='NavIcon' onClick={showNavBar}>
                < i className="ri-menu-3-fill text-blue-200 text-3xl"></i>    {/*For open Nav menu list (Responsive)*/}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
