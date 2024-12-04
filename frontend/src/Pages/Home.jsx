import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import ServiceSlider from '../Components/ServiceSlider'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <ServiceSlider />
      <Testimonials className="" />
      <Contact />
  
    </div>
  )
}

export default Home

