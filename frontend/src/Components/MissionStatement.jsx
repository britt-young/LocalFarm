import React from 'react';
import Stepper from "./Stepper";

const MissionStatement = () => {

  return (
    <div className=''>
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
      {/* Farm-to-Table */}
      <Stepper />
    </div>
  );
};

export default MissionStatement;
