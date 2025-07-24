import Header from "../Components/Header";
// import ProductGrid from "../Components/ProductGrid";
import Contact from "../Components/Contact";
import HomeAbout from "../Components/HomeAbout";
// import AwardSection from "../Components/AwardSection";


const Home = () => {
  return (
    <div>
      <Header />
      <HomeAbout />
      {/* Uncomment the following lines to include ProductGrid and AwardSection components */}
      {/* <ProductGrid />
      <AwardSection /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
