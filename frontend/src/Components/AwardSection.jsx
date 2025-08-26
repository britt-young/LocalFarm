import award from "../assets/award.svg";

const AwardSection = () => {
  return (
    <div className="bg-gray-100 lg:py-20 py-16">
      <div>
        <h3 className="text-center">Others agree Local is the best!</h3>
      </div>
      <div className="h-full flex flex-col lg:flex-row  p-5 ">
        <div className="container flex flex-col items-center mx-auto lg:p-8">
          <p className="text-center mt-5 mb-1 uppercase text-sm text-gray-600">
            sustainability
          </p>
          <img src={award} alt="Award" className="w-32 h-32 mb-4" />
          <h5 className="mx-20 py-2 text-center font-semibold">
            "2023 FARM Excellence Award in Environmental Stewardship"
          </h5>
        </div>
        <div className="hidden lg:flex container flex flex-col items-center  mx-auto  md:p-8">
          <p className="text-center mt-5 mb-1 uppercase text-sm text-gray-600">
            health
          </p>
          <img src={award} alt="Award" className="w-32 h-32 mb-4" />
          <h5 className="mx-20 py-2 text-center font-semibold">
            "2024 FARM Excellence Award in Animal Care & Antibiotic Stewardship"
          </h5>
        </div>
        <div className="hidden lg:flex container flex flex-col items-center mx-auto  md:p-8">
          <p className="text-center mt-5 mb-1 uppercase text-sm text-gray-600">
            sustainability
          </p>
          <img src={award} alt="Award" className="w-32 h-32 mb-4" />
          <h5 className="mx-20 py-2 text-center font-semibold">
            "2025 FARM Excellence Award in Environmental Stewardship"
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
