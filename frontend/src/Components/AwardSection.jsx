import award from "../assets/award.svg";

const AwardSection = () => {
  return (
    <div className="h-full flex justify-center items-center bg-gray-100">
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
        <img src={award} alt="Award" className="w-32 h-32 mb-4" />
        <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
          "Winner of the 2023 FARM Excellence Award in Environmental
          Stewardship"
        </p>
      </div>
    </div>
  );
};

export default AwardSection;
