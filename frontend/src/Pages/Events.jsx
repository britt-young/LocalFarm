import React from "react";
import EventFilter from "../Components/EventFilter";
import EventsGrid from "../Components/EventsGrid";

const Events = () => {
  return (
    <div>
      <div className="flex">
        <EventFilter />
        <EventsGrid />
      </div>
    </div>
  );
};

export default Events;
