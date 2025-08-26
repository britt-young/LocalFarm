import NavBar from "../Temps/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Temps/Footer";
import ScrollToTop from "../Temps/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
