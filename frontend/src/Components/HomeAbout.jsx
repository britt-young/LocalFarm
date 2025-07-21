import HomeService1 from "./HomeService1";
import HomeService2 from "./HomeService2";
import HomeService3 from "./HomeService3";

const HomeAbout = () => {
  return (
    <div className=" 
                bg-[url('/images/backgrounds/mobile.svg')]
                bg-no-repeat bg-cover py-10">
        <HomeService1 />
        <HomeService2 />
        <HomeService3 />
      </div>
  );
};

export default HomeAbout;
