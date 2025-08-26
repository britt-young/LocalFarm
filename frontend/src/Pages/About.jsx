// import AboutBanner from "../Components/AboutBanner";

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
      <div className="lazyload">
        <AwardSection />
        <Team />
      </div>

      {/* <AboutVideo /> */}
    </div>
  );
};

export default About;
