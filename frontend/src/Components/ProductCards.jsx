import React from "react";
import seasons from "../assets/imgs/seasons-icon.svg";
import veggies from "../assets/imgs/veggies.png";
// Initialization for ES Users
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const ProductCards = () => {
  return (
    <div>
      {/* Product Title */}
      <div className="divide-y-2 divide-solid divide-lime-900 mx-20">
        <h2 className="flex justify-center m-5 text-5xl">Product Catelog</h2>
        <div className="px-10">
          <p className="text-lg m-4 lg:mx-40 px-2 text-center">
            Explore our selection of fresh products grown with care and
            harvested at their peak. Each item is carefully cultivated to bring
            the best flavors and nutrients to your table. Taste the difference
            of naturally grown, fresh-from-the-farm goodness!
          </p>
        </div>
      </div>
{/* Product Description */}
      <div class="max-w-sm w-full lg:max-w-full lg:flex m-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={veggies} alt="veggies" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Grains</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* Season */}
        <div class="shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="flex items-center mb-5">
            <img class="w-10" src={seasons} alt="seasons" />
            <p class="text-md text-gray-600 flex items-center ml-2">Seasonal</p>
            </div>
            <div class="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
