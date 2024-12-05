import React from "react";
import fair from "../assets/imgs/fair.jpg";
import fest from "../assets/imgs/fallfest.jpg";
import market from "../assets/imgs/market.jpg";
import rodeo from "../assets/imgs/rodeo.jpg";
import AOS from "aos";

AOS.init();

const EventsGrid = () => {
  return (
    <div className="flex flex-col items-center m-auto py-20">
      {/* Title */}
      {/* <h1 className="font-bold text-4xl mb-10">
        Events Featuring Local Farm Pop-Up
      </h1> */}
      {/* Event Cards */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://eldercarebigbend.org/oktoberfest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={fest}
                alt="fest"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-orange-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">15</div>
                <div className="font-bold tracking-wider">AUG</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Autumn Festival</div>
              <div className="text-md">
                Hosted by the Jameson Chamber of Commerce
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://northfloridafair.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={fair}
                alt="fair"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-red-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">10</div>
                <div className="font-bold tracking-wider">SEP</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Gray County Fair</div>
              <div className="text-md">
                Sunrise to sunset at the Gray County Fairgrounds
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://www.tallahasseefarmersmarket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={market}
                alt="market"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-teal-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">1</div>
                <div className="font-bold tracking-wider">OCT</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">
                Local Town Farmer's Market
              </div>
              <div className="text-md">
                Every Saturday in October from 8am to 1pm at the Town Square
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://www.doublekrodeoproductions.com/events/9th-annual-tallahassee-extreme-rodeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={rodeo}
                alt="rodeo"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-blue-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">21</div>
                <div className="font-bold tracking-wider">APR</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Jameson Annual Rodeo</div>
              <div className="text-md">
                3rd Annual Jameson Rodeo at the Gray County Fairgrounds
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://eldercarebigbend.org/oktoberfest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={fest}
                alt="fest"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-orange-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">15</div>
                <div className="font-bold tracking-wider">AUG</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Autumn Festival</div>
              <div className="text-md">
                Hosted by the Jameson Chamber of Commerce
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://northfloridafair.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={fair}
                alt="fair"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-red-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">10</div>
                <div className="font-bold tracking-wider">SEP</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Gray County Fair</div>
              <div className="text-md">
                Sunrise to sunset at the Gray County Fairgrounds
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://www.tallahasseefarmersmarket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={market}
                alt="market"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-teal-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">1</div>
                <div className="font-bold tracking-wider">OCT</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">
                Local Town Farmer's Market
              </div>
              <div className="text-md">
                Every Saturday in October from 8am to 1pm at the Town Square
              </div>
            </div>
          </div>
        </div>
        {/* Event Card */}
        <div
          data-aos="fade-up"
          className="max-w-md rounded overflow-hidden shadow-lg"
        >
          <a
            href="https://www.doublekrodeoproductions.com/events/9th-annual-tallahassee-extreme-rodeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-96">
              <img
                className="object-cover w-full h-full"
                src={rodeo}
                alt="rodeo"
              />
            </div>
          </a>
          <div className="bg-white shadow-lg shadow-gray-200 flex grid-rows-1 items-center">
            <div className="bg-blue-700 text-white p-6 text-2xl">
              <div className="flex flex-col items-center">
                <div className="day">21</div>
                <div className="font-bold tracking-wider">APR</div>
              </div>
            </div>
            <div className="px-10">
              <div className="font-bold text-lg pb-1">Jameson Annual Rodeo</div>
              <div className="text-md">
                3rd Annual Jameson Rodeo at the Gray County Fairgrounds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
