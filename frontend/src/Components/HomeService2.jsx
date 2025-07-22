import { Link } from "react-router-dom";

const HomeService2 = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white/50">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-4 lg:gap-20 gap-5">
        <div className="grid grid-cols-4 md:gap-2 lg:w-1/2 w-full">
          <div className="col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1607358049845-4360f06be5b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-lg lg:h-[150px] h-fit md:h-[200px] w-full"
              alt="orchard"
            />
          </div>
          <div className="lg:col-span-2 md:col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1533330265487-9d2bd48b57e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg md:grid md:h-[200px] w-full lg:h-[150px]"
              alt="u-pick"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1737947292282-aa6ec5c8fd57?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg lg:grid lg:h-[150px] w-full"
              alt="sign"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start lg:w-1/2">
          <h6 className="uppercase font-semibold text-xs text-gray-600">
            fresh from the ground
          </h6>
          <h3 className="text-2xl font-bold">U-Pick Orchard</h3>
          <p className="text-gray-700 mb-5">
            Seasonal u-pick fruits, vegetables and flowers
          </p>
          <Link to="/products">
            <button>See what's in season</button>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default HomeService2;
