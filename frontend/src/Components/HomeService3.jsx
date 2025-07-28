import { Link } from "react-router-dom";

const HomeService3 = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white/50">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center p-4 lg:gap-20 gap-5 my-10">
        <div className="flex flex-col flex-1 lg:items-end items-center lg:text-end text-center lg:w-1/2">
          <h6 className="uppercase font-semibold text-xs text-gray-600">
            local community
          </h6>
          <h4>Events & Summer Camps</h4>
          <p className="text-gray-700 mb-5">
            Join us for a variety of fun and educational activities
          </p>
          <Link to="/events">
            <button>Go to calendar</button>
          </Link>
        </div>
        <div className="grid grid-cols-4 md:gap-2 lg:w-1/2 w-full">
          <div className="col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1663090216491-61a0a30c5068?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-lg lg:h-[200px] h-fit md:h-[200px] w-full"
              alt="camp"
            />
          </div>
          <div className="lg:col-span-2 md:col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1664355811228-3baa53f4b179?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg md:grid md:h-[200px] w-full lg:h-[150px]"
              alt="petting zoo"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1725873536711-35ec590b0449?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg lg:grid lg:h-[150px] w-full"
              alt="pumpkin carving"
            />
          </div>
          </div>
        </div>
      </div>
  );
};

export default HomeService3;
