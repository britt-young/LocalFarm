import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Events from './Events'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'

import Veggies from './Veggies'
import Meat from './Meat'
import Dairy from './Dairy'
import Eggs from './Eggs'
import Fruits from './Fruits'
import Spices from './Spices'
import Grains from './Grains'
import Feed from './Feed'

import ErrorPg from './404'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} /> 

            <Route path="services/veggies" element={<Veggies />} />
            <Route path="services/meat" element={<Meat />} />
            <Route path="services/dairy" element={<Dairy />} />
            <Route path="services/eggs" element={<Eggs />} />
            <Route path="services/fruits" element={<Fruits />} />
            <Route path="services/spices" element={<Spices />} /> 
            <Route path="services/grains" element={<Grains />} />
            <Route path="services/feed" element={<Feed />} /> 
            <Route path="*" element={<ErrorPg />} />           
        </Routes>
    </div>
  )
}

export default Router