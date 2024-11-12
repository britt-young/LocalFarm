import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Services, Contact, Privacy, Terms } from './'

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
        </Routes>
    </div>
  )
}

export default Router