import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'
import ErrorPg from './404'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} /> 
            <Route path="*" element={<ErrorPg />} />           
        </Routes>
    </div>
  )
}

export default Router