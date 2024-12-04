import React from "react";
import Stepper from "./Stepper";

const MissionStatement = () => {
  return (
    <div className="">
      {/* Values/Mission About*/}
      <div className="divide-y-2 divide-solid divide-lime-900 mx-20">
        <h2 className="flex justify-center m-5 text-5xl">
          Our "farm-to-table" Mission
        </h2>
        <div className="px-10">
          <p className="text-lg m-4 px-2 indent-10">
            Our mission is to promote sustainable, community-driven agriculture
            by supporting farm-to-table practices that connect local farmers
            with consumers. We believe in the power of fresh, locally grown food
            to nourish both individuals and the environment. By fostering direct
            relationships between farmers and consumers, we aim to reduce the
            environmental impact of transportation, enhance food security, and
            strengthen local economies. Our commitment to farm-to-table farming
            ensures that the highest quality produce is cultivated with care,
            respect for the land, and in harmony with nature, creating a
            healthier and more sustainable food system for all
          </p>
        </div>
      </div>
      {/* Farm-to-Table */}
      <Stepper />
    </div>
  );
};

export default MissionStatement;
