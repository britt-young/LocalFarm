import React from "react";
import video from "../assets/vids/aboutvideo1.mp4";

const AboutVideo = () => {
  return (
    <div>
      <video
        className="shadow-lg object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
        style={{ height: "700px", width: "100%" }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default AboutVideo;
