import React from 'react'

const Stats = () => {
  return (
        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-16 gap-x-8 md:grid-cols-4">
                    <div>
                        <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 1 </span>
                        </h2>
                        <h4 className="mt-4 text-gray-900">Enhanced Food Security</h4>
                        <p className="mt-0.5 text-gray-500">An improved supply chain between growers and communities</p>
                    </div>

                    <div>
                        <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 2 </span>
                        </h2>
                        <h4 className="mt-4 text-gray-900">Less Physical Distance</h4>
                        <p className="mt-0.5 text-gray-500">Reduced environmental impact from food transport operations</p>
                    </div>

                    <div>
                        <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 3 </span>
                        </h2>
                        <h4 className="mt-4 text-gray-900">Self-Reliance</h4>
                        <p className="mt-0.5 text-gray-500">Increased community ability to source a dependable food supply</p>
                    </div>

                    <div>
                        <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 4 </span>
                        </h2>
                        <h4 className="mt-4 text-gray-900">Food System Sustainability</h4>
                        <p className="mt-0.5 text-gray-500">Best growing practices that foster environmental conservation</p>
                    </div>
                </div>
  )
}

export default Stats