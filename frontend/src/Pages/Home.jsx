import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import ServiceSlider from '../Components/ServiceSlider'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <ServiceSlider />
      <Testimonials className="" />
      <Footer />
    </div>
  )
}

export default Home

