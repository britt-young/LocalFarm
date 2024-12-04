import React from 'react'
import AboutVideo from '../Components/AboutVideo'
import MissionStatement from '../Components/MissionStatement'
import Team from '../Components/Team'




export const About = () => {
  return (
    <div>
      <h2 className="flex justify-center m-5 text-2xl uppercase">Connecting our community with fresh, healthy produce and proteins </h2>
      <AboutVideo />
      <MissionStatement />
      <Team />
   
    </div>
  )
}

export default About