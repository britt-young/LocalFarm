import React from "react";
import Stats from "./stats";

const MissionStatement = () => {
  return (
    <div className="">
      {/* Values/Mission About*/}

      <section className="py-10 bg-zinc-50 py-16 lg:py-10">
        <div className="max-w-7xl px-4 mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3>
              About Local
            </h3>
            <h6 className="mb-4">
              We are a community-driven agricultural resource connecting local
              farmers and local families. Our mission is to promote sustainable
              agriculture, provide a fun outdoor experience, and share local
              food with everyone. We are proud partners with{" "}
              <span className="font-bold">
                Market on Main Tally, Parrish Farm to Table Restaurant
              </span>
              , and{" "}
              <span className="font-bold">Tallahassee Farmers Market</span>.
              
            </h6>
          </div>
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default MissionStatement;
