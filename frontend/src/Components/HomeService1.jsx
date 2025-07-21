import { Link } from "react-router-dom";

const HomeService1 = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white/50">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center p-4 lg:gap-15 gap-5">
        <div className="flex flex-col flex-1 items-start lg:w-1/2">
          <h6 className="uppercase font-semibold text-xs text-gray-600">
            buy local
          </h6>
          <h3 className="text-2xl font-bold">General Store</h3>
          <p className="text-gray-700 mb-5">
            We are committed to providing the best services to our customers.
          </p>
          <Link to="/products">
            <button>View products</button>
          </Link>
        </div>
        <div className="grid grid-cols-4 md:gap-2 lg:w-1/2 w-full">
          <div className="col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1647553756926-21a62021b9d2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover rounded-lg lg:h-[150px] h-fit md:h-[200px] w-full"
              alt="seed packets"
            />
          </div>
          <div className="lg:col-span-2 md:col-span-4 md:mx-50 lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg md:grid md:h-[200px] w-full lg:h-[150px]"
              alt="pie"
            />
          </div>
          <div className="col-span-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1664273586787-1c60bc2ea389?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover hidden h-fit rounded-lg lg:grid lg:h-[150px] w-full"
              alt="honeycomb"
            />
          </div>
        </div>
      </div>
      </div>
  )
}

export default HomeService1