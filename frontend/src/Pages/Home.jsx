import React from 'react'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import ServiceSlider from '../Components/ServiceSlider'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ServiceSlider />
      <Footer />
    </div>
  )
}

export default Home