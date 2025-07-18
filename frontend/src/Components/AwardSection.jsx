import award from "../assets/award.svg";

const AwardSection = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row bg-gray-100 p-5">
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
        <img src={award} alt="Award" className="w-32 h-32 mb-4" />
        <h5 className="px-6 py-2 text-center font-semibold">
          "Winner of the 2023 FARM Excellence Award in Environmental
          Stewardship"
        </h5>
      </div>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
        <img src={award} alt="Award" className="w-32 h-32 mb-4" />
        <h5 className="px-6 py-2 text-center font-semibold">
          "Winner of the 2023 FARM Excellence Award in Environmental
          Stewardship"
        </h5>
      </div>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
        <img src={award} alt="Award" className="w-32 h-32 mb-4" />
        <h5 className="px-6 py-2 text-center font-semibold">
          "Winner of the 2023 FARM Excellence Award in Environmental
          Stewardship"
        </h5>
      </div>
    </div>
  );
};

export default AwardSection;
