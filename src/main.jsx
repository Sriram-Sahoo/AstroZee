import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/Satalite/SateliteStyle.css'
import './Components/Galaxy/GalaxyStyle.css'
import './Components/Navbar/NavbarStyle.css'
import './Components/Technology/TechnologyStyle.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Galaxy from './Components/Galaxy/Galaxy.jsx'
import Satelite from './Components/Satalite/Satelite.jsx'
import Technology from './Components/Technology/Technology.jsx'
import './Components/Preloader/PreloaderStyle.css'

import 'remixicon/fonts/remixicon.css'



const route =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
        <Route path='' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Galaxy' element={<Galaxy />} />
        <Route path='Satelite' element={<Satelite />} />
        <Route path='Technology' element={<Technology/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
