import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const stepContent = [
    'An improved supply chain between growers and communities',
    'Reduced environmental impact from food transportation operations',
    'Increased community ability to source a dependable food supply ',
    'Best growing practices that foster environmental conservation ',
  ];

  const stepTitles = [
        'Enhanced Food Security',
        'Less Physical Distance',
        'Self-Reliance',
        'Food System Sustainability',
      ];

  return (
    <div className="w-full flex items-center justify-center m-10">
      <div className="w-full max-w-screen-xl px-6 py-8 bg-white shadow-lg rounded-lg flex">
        {/* Stepper Sider */}
        <div className="w-1/4 flex flex-col items-start space-y-8">
          {/* Loop through the steps */}
          {[...Array(totalSteps)].map((_, index) => {
            const step = index + 1;
            return (
              <div
                key={step}
                className={`w-full flex items-center space-x-4 ${step < currentStep ? 'text-lime-500' : ''} ${step === currentStep ? 'text-lime-700 font-semibold' : ''} ${step > currentStep ? 'text-gray-400' : ''}`}
              >
                <div
                  onClick={() => setCurrentStep(step)} // Set the current step when clicked
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer
                    ${step < currentStep ? 'bg-lime-500' : ''}
                    ${step === currentStep ? 'bg-lime-700' : ''}
                    ${step > currentStep ? 'bg-gray-300' : ''}
                    transition-all duration-300`}
                >
                  {step}
                </div>

                {/* Include Step Title */}
                <div className="flex-1 text-lg">{stepTitles[step - 1]}</div>
              </div>
            );
          })}
        </div>

        {/* Step Content Side */}
        <div className="w-3/4 flex justify-center">
          <div className="text-center content-center w-full max-w-xl">
            <h3 className="text-2xl font-bold mb-2">{stepTitles[currentStep - 1]}</h3>
            <p className="text-gray-700">{stepContent[currentStep - 1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
