import React from "react";
import EventFilter from "../Components/EventFilter";
import EventsGrid from "../Components/EventsGrid";

const Events = () => {
  return (
    <div>
      <h2 className="flex justify-center mt-20 text-5xl">Local Farm Event Pop-Ups</h2>
      <div className="flex">
        <EventFilter />
        <EventsGrid />
      </div>
    </div>
  );
};

export default Events;
