import React from 'react'
import AboutVideo from '../Components/AboutVideo'
import MissionStatement from '../Components/MissionStatement'
import Team from '../Components/Team'




export const About = () => {
  return (
    <div>
      <h2 className="bg-lime-900 text-white flex justify-center py-2 text-lg uppercase tracking-widest">Connecting our community with fresh, healthy produce and proteins </h2>
      <AboutVideo />
      <MissionStatement />
      <Team />
   
    </div>
  )
}

export default About