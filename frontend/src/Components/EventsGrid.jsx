import React from "react";
import fair from "../assets/imgs/fair.jpg";
import fest from "../assets/imgs/fallfest.jpg";
import market from "../assets/imgs/market.jpg";
import rodeo from "../assets/imgs/rodeo.jpg";

const EventsGrid = () => {
  return (
    <div className='flex flex-col justify-center m-auto'>
        <h1 className='font-bold text-4xl'>Upcoming Events at George Mason University</h1>
        <div className="m-5 bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
          <div className="bg-blue-600 text-white p-6 text-2xl">
            <div className="flex flex-col items-center">
              <div className="day">15</div>
              <div className="font-bold">MAY</div>
            </div>
          </div>
          <div className="px-10">
            <div className="font-bold text-lg pb-1">Pre-Mason Day</div>
            <div className="text-md">
              Early celebration in the Corner Pocket
            </div>
          </div>
        </div>

        <div className="m-5 bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
          <div className="bg-blue-600 text-white p-6 text-2xl">
            <div className="flex flex-col items-center">
              <div className="day">15</div>
              <div className="font-bold">MAY</div>
            </div>
          </div>
          <div className="px-10">
            <div className="font-bold text-lg pb-1">Pre-Mason Day</div>
            <div className="text-md">
              Early celebration in the Corner Pocket
            </div>
          </div>
        </div>

        <div className="m-5 bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
          <div className="bg-blue-600 text-white p-6 text-2xl">
            <div className="flex flex-col items-center">
              <div className="day">15</div>
              <div className="font-bold">MAY</div>
            </div>
          </div>
          <div className="px-10">
            <div className="font-bold text-lg pb-1">Pre-Mason Day</div>
            <div className="text-md">
              Early celebration in the Corner Pocket
            </div>
          </div>
        </div>

        <div className="m-5 bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
          <div className="bg-blue-600 text-white p-6 text-2xl">
            <div className="flex flex-col items-center">
              <div className="day">15</div>
              <div className="font-bold">MAY</div>
            </div>
          </div>
          <div className="px-10">
            <div className="font-bold text-lg pb-1">Pre-Mason Day</div>
            <div className="text-md">
              Early celebration in the Corner Pocket
            </div>
          </div>
        </div>
    </div>
  );
};

export default EventsGrid;


