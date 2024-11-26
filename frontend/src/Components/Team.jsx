import React from "react";
import john from "../assets/imgs/farmerjohn.jpg";
import jane from "../assets/imgs/farmerjane.jpg";
import sara from "../assets/imgs/farmersara.jpg";
import ray from "../assets/imgs/farmerray.png";

const Team = () => {
  return (
    <div>
      {/* Team About*/}
      <div className="divide-y-2 divide-solid divide-lime-900 ">
        <h2 className="flex justify-center m-5 text-5xl"> Meet The Team</h2>
        <div className="flex justify-center flex-wrap mx-20">
          {/* First Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-2xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:!rounded-none md:!rounded-s-lg"
              src={john}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="text-xl font-medium">John "Jack" Bennett</h5>
              <h4 className="mb-2 text-base font-semibold">
                Owner of Local Farm
              </h4>
              <p className="mb-4 text-base">
                Growing up on his family’s organic farm in Willow Creek, Jack
                learned the values of hard work and land stewardship, which he
                carries into his own farming practice today. Committed to giving
                back, he donates a portion of his harvest to local food banks
                and works to create a stronger, more sustainable local food
                system. Through his farm, Jack hopes to pass on his legacy of
                care for the land and the community to future generations.
              </p>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-2xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:!rounded-none md:!rounded-s-lg"
              src={jane}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="text-xl font-medium">Jane Bennett</h5>
              <h4 className="mb-2 text-base font-semibold">
                Produce Professional
              </h4>
              <p className="mb-4 text-base">
                Jane is a hands-on partner on the farm, where she helps manage
                everything from crop planning to caring for their livestock.
                She’s particularly passionate about food education, often
                hosting workshops for local families on how to cook with fresh,
                seasonal ingredients. Emily also plays a key role in their
                community involvement, organizing charity events and
                coordinating farm tours to educate others about sustainable
                agriculture. Together with Jack, she is committed to building a
                healthier, more connected community, ensuring that the next
                generation grows up with a deep appreciation for the land and
                the food it provides.
              </p>
            </div>
          </div>
          {/* Third Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-2xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:!rounded-none md:!rounded-s-lg"
              src={sara}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="text-xl font-medium">Sara-Ann James</h5>
              <h4 className="mb-2 text-base font-semibold">
                Veternarian
              </h4>
              <p className="mb-4 text-base">
                Jane is a hands-on partner on the farm, where she helps manage
                everything from crop planning to caring for their livestock.
                She’s particularly passionate about food education, often
                hosting workshops for local families on how to cook with fresh,
                seasonal ingredients. Emily also plays a key role in their
                community involvement, organizing charity events and
                coordinating farm tours to educate others about sustainable
                agriculture. Together with Jack, she is committed to building a
                healthier, more connected community, ensuring that the next
                generation grows up with a deep appreciation for the land and
                the food it provides.
              </p>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-2xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:!rounded-none md:!rounded-s-lg"
              src={ray}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="text-xl font-medium">Ray Huddleson</h5>
              <h4 className="mb-2 text-base font-semibold">
                Agricultural Specialist
              </h4>
              <p className="mb-4 text-base">
                Jane is a hands-on partner on the farm, where she helps manage
                everything from crop planning to caring for their livestock.
                She’s particularly passionate about food education, often
                hosting workshops for local families on how to cook with fresh,
                seasonal ingredients. Emily also plays a key role in their
                community involvement, organizing charity events and
                coordinating farm tours to educate others about sustainable
                agriculture. Together with Jack, she is committed to building a
                healthier, more connected community, ensuring that the next
                generation grows up with a deep appreciation for the land and
                the food it provides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
