import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './component/Navbar/Home'
import Contact from './component/Navbar/Contact'
import About from './component/Navbar/About'
import Footer from './component/Navbar/Footer'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about"  element={<About />}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App