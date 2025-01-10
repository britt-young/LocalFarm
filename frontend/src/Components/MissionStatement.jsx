import React from "react";

const MissionStatement = () => {
  return (
    <div className="">
      {/* Values/Mission About*/}
      
      <section className="py-10 bg-zinc-50 sm:py-16 lg:py-10">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">The Local Farm Mission</h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">At Local Farm, our mission is to cultivate fresh, sustainable, and
            farm-to-table products that nourish both body and community. We are
            dedicated to growing high-quality, locally sourced food while
            fostering a deep connection between our farm and the people we
            serve.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-16 sm:gap-x-8 md:grid-cols-4">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 1 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Enhanced Food Security</p>
                        <p className="text-base mt-0.5 text-gray-500">An improved supply chain between growers and communities</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 2 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Less Physical Distance</p>
                        <p className="text-base mt-0.5 text-gray-500">Reduced environmental impact from food transportation operations</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 3 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Self-Reliance</p>
                        <p className="text-base mt-0.5 text-gray-500">Increased community ability to source a dependable food supply</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 4 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Food System Sustainability</p>
                        <p className="text-base mt-0.5 text-gray-500">Best growing practices that foster environmental conservation</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MissionStatement;
