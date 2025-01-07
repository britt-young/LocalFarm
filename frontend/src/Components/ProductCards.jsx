import React from "react";
import seasons from "../assets/imgs/seasons-icon.svg";
import veggies from "../assets/imgs/veggies.png";

import winter from "../assets/imgs/winter.svg";
import spring from "../assets/imgs/spring.svg";
import summer from "../assets/imgs/summer.svg";
import fall from "../assets/imgs/fall.svg";

// Initialization for ES Users
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const ProductCards = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-1 grid-cols-1">
        {/* Product Description */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
      {/* Product Description */}
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={veggies} alt="veggies" />
            <div className="px-6 py-4 h-full bg-white">
              <div className="font-bold text-xl">Carrots</div>
              <p className="text-md text-gray-600 mb-4">Vegetable</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          {/* Season */}
          <div className="w-100 shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <img className="w-5" src={seasons} alt="seasons" />
                <p className="text-md text-gray-600 flex items-center ml-2">
                  Seasonal
                </p>
              </div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Northern Florida
              </div>
              <p className="text-gray-700 text-base">January & February</p>
              <img className="w-24" src={winter} alt="seasons" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductCards;
