import React from "react";
import AboutBanner from "../Components/AboutBanner";
// import AboutVideo from '../Components/AboutVideo'

import MissionStatement from "../Components/MissionStatement";
import AwardSection from "../Components/AwardSection";
import Team from "../Components/Team";

export const About = () => {
  return (
    <div>
      <MissionStatement />
      {/* <AboutBanner/> */}
      <Team />
      <AwardSection />
      {/* <AboutVideo /> */}
    </div>
  );
};

export default About;
