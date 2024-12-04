import React from 'react'
import AboutVideo from '../Components/AboutVideo'
import MissionStatement from '../Components/MissionStatement'
import Team from '../Components/Team'
import AboutAccordion from '../Components/AboutAccordion'



export const About = () => {
  return (
    <div>
      <AboutVideo />
      <MissionStatement />
      <Team />
      <AboutAccordion />
    </div>
  )
}

export default About