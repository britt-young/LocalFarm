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
              The Local Farm Mission
            </h3>
            <h5 className="mt-3 text-gray-600 md:mt-8">
              At Local Farm, our mission is to cultivate fresh, sustainable, and
              farm-to-table products that nourish both body and community. We
              are dedicated to growing high-quality, locally sourced food while
              fostering a deep connection between our farm and the people we
              serve
            </h5>
          </div>
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default MissionStatement;
