import { Link } from "react-router-dom";

const HomeService3 = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center p-4 lg:gap-20 gap-5">
        <div className="flex flex-col flex-1 items-start lg:w-1/2">
          <h6 className="uppercase font-semibold text-xs text-gray-600">
            local
          </h6>
          <h3 className="text-2xl font-bold">Events & Summer Camps</h3>
          <p className="text-gray-700 mb-5">
            Join us for a variety of fun and educational activities!
          </p>
          <Link to="/events">
            <button>Go to calendar</button>
          </Link>
        </div>
        <div className="grid grid-cols-4 lg:gap-4 lg:w-1/2 w-full">
          <div className="col-span-4">
            <img
              src="https://images.unsplash.com/photo-1671103977144-742df78811ee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-lg lg:h-[150px] h-fit md:h-[200px] w-full"
              alt="Store"
            />
          </div>
          <div className="lg:col-span-2 md:col-span-4 ">
            <img
              src="https://images.unsplash.com/photo-1671103977144-742df78811ee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg md:grid md:h-[200px] w-full lg:h-[150px]"
              alt="Store"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1671103977144-742df78811ee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg lg:grid lg:h-[150px] w-full"
              alt="Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService3;
