import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import ProductSlider from '../Components/ProductSlider'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <ProductSlider />
      <Testimonials className="" />
      <Contact />
  
    </div>
  )
}

export default Home

