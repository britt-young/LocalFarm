import React from "react";
import AboutBanner from "../Components/AboutBanner";
// import AboutVideo from '../Components/AboutVideo'

import MissionStatement from "../Components/MissionStatement";
import AwardSection from "../Components/AwardSection";
import Team from "../Components/Team";
import AboutHeader from "../Components/AboutHeader";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <MissionStatement />
      {/* <AboutBanner/> */}
      <AwardSection />
      <Team />
      
      {/* <AboutVideo /> */}
    </div>
  );
};

export default About;
