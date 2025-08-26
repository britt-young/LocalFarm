import zoo from "../assets/imgs/zoo.jpg"
import horse from "../assets/imgs/horse.jpg"
import bee from "../assets/imgs/bees.jpg"
import maze from "../assets/imgs/maze.jpg"

const AboutStats = () => {
  return (
        <div className="grid grid-cols-1 lg:gap-8 gap-15 mt-10 text-center lg:mt-16 gap-x-8 md:grid-cols-4">
                    <div>
                        <img src={zoo} alt="Petting Zoo" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 1 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Petting Zoo</h4>
                        <p className="mt-0.5 text-gray-500">Come hangout with your favorite farm animals, you can feed and pet them!</p>
                    </div>

                    <div>
                        <img src={horse} alt="Rodeo Stadium" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 2 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Rodeo Stadium</h4>
                        <p className="mt-0.5 text-gray-500">Barrel racing, hog-tying, and sheep rangling! Check our event calendar for the next rodeo show</p>
                    </div>

                    <div>
                        <img src={bee} alt="Bee Hives" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 3 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">Local Wild Honey</h4>
                        <p className="mt-0.5 text-gray-500">Home to over 100,000 honey bees pollinating local flowers to produce the finest honey!</p>
                    </div>

                    <div>
                        <img src={maze} alt="50+ Acre Corn Maze" className="mx-auto mb-4 w-64 h-64 rounded-lg shadow-lg" />
                        {/* <h2>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500"> 4 </span>
                        </h2> */}
                        <h4 className="mt-4 text-gray-900">50+ Acre Corn Maze</h4>
                        <p className="mt-0.5 text-gray-500">Get lost in our giant seasonal corn maze, a fun challenge for all ages!</p>
                    </div>
                </div>
  )
}

export default AboutStats