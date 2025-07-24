import zoo from "../assets/imgs/zoo.jpg"
import horse from "../assets/imgs/horse.jpg"
import bee from "../assets/imgs/bees.jpg"
import maze from "../assets/imgs/maze.jpg"

const Stats = () => {
  return (
        <div className="grid grid-cols-1 lg:gap-8 gap-15 mt-10 text-center lg:mt-16 gap-x-8 md:grid-cols-4">
                    <div>
                        <img src={zoo} alt="Petting Zoo" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 1 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Petting Zoo</h4>
                        <p className="mt-0.5 text-gray-500">An improved supply chain between growers and communities</p>
                    </div>

                    <div>
                        <img src={horse} alt="Rodeo Stadium" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 2 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Rodeo Stadium</h4>
                        <p className="mt-0.5 text-gray-500">Reduced environmental impact from food transport operations</p>
                    </div>

                    <div>
                        <img src={bee} alt="Bee Hives" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 3 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Local Wild Honey</h4>
                        <p className="mt-0.5 text-gray-500">Increased community ability to source a dependable food supply</p>
                    </div>

                    <div>
                        <img src={maze} alt="50+ Acre Corn Maze" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 4 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">50+ Acre Corn Maze</h4>
                        <p className="mt-0.5 text-gray-500">Best growing practices that foster environmental conservation</p>
                    </div>
                </div>
  )
}

export default Stats