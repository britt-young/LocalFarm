import React from "react";
import fair from "../assets/imgs/fair.jpg";
import fest from "../assets/imgs/fallfest.jpg";
import market from "../assets/imgs/market.jpg";
import rodeo from "../assets/imgs/rodeo.jpg";

const EventsGrid = () => {
  return (
    <div>
      <div className="grid-cols-1 sm:grid md:grid-cols-3  m-10">
        {/* First Card */}
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-t-lg" src={fair} alt="County Fair" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Sopchoppy County Fair
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        {/* Second Card */}
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-t-lg" src={rodeo} alt="Rodeo" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Jameson State Finals Rodeo
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        {/* Third Card */}
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-t-lg" src={market} alt="Farmers Market" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Tallahassee Farmers Market
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img className="rounded-t-lg" src={fest} alt="Fall Festival" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Autumn Fest
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
