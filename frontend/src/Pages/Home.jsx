import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import Intro from '../Components/Intro'
import ServiceSlider from '../Components/ServiceSlider'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Intro />
      <ServiceSlider />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home