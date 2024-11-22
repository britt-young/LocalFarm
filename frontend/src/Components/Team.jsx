import React from "react";
import john from "../assets/imgs/farmerjohn.jpg";
import jane from "../assets/imgs/farmerjane.jpg";

const Team = () => {
  return (
    <div>
      {/* Values/Mission About*/}
      <div className="divide-y-2 divide-solid divide-lime-900">
        <h2 className="flex justify-center m-5 text-5xl">Our Mission</h2>
        <div className="mx-20">
          <p className="m-4 px-2 indent-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      {/* Team About*/}
      <div className="divide-y-2 divide-solid divide-lime-900 ">
        <h2 className="flex justify-center m-5 text-5xl"> Meet The Team</h2>
        <div className="mx-20">
          {/* First Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
              src={john}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium">John Doe</h5>
              <p className="mb-4 text-base">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row m-10">
            <img
              className="h-100 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
              src={jane}
              alt="farmer"
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium">Jane Doe</h5>
              <p className="mb-4 text-base">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
