import React from "react";
import Stats from "./stats";

const MissionStatement = () => {
  return (
    <div className="">
      {/* Values/Mission About*/}

      <section className="py-10 bg-zinc-50 sm:py-16 lg:py-10">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              The Local Farm Mission
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              At Local Farm, our mission is to cultivate fresh, sustainable, and
              farm-to-table products that nourish both body and community. We
              are dedicated to growing high-quality, locally sourced food while
              fostering a deep connection between our farm and the people we
              serve
            </p>
          </div>
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default MissionStatement;
