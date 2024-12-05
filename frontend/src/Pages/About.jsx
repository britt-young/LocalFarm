import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import AboutVideo from '../Components/AboutVideo'
import MissionStatement from '../Components/MissionStatement'
import Team from '../Components/Team'


export const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutVideo />
      <MissionStatement />
      <Team />
   
    </div>
  )
}

export default About