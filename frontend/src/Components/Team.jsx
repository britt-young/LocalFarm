import React from "react";
import john from '../assets/imgs/farmerjohn.jpg'
import jane from '../assets/imgs/farmerjane.jpg'

const Team = () => {
  return (
    <div className="">
      <h2 className="flex justify-center m-5 text-5xl "> Meet The Team</h2>
      <div className="">
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
  );
};

export default Team;
