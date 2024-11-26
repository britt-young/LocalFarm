import React from 'react'
import AboutVideo from '../Components/AboutVideo'
import MissionStatement from '../Components/MissionStatement'
import Team from '../Components/Team'
import AboutTimeline from '../Components/AboutTimeline'

export const About = () => {
  return (
    <div>
      <AboutVideo />
      <MissionStatement />
      <Team />
      <AboutTimeline />
    </div>
  )
}

export default About