import { Link } from "react-router-dom";
import logo from "../assets/logos/sample-logo.svg";


const Header = () => {
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[700px] overflow-hidden bg-[url(./public/images/header1.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/0 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="text-center uppercase md:px-12 ">
                <h1 className="text-white text-7xl">Local Farm</h1>
                <h5 className="text-white">Fresh food & family fun</h5>
                {/* <img src={logo} alt="Logo" className="w-full mb-5" /> */}
                {/* <Link to="/events">
                  <button>
                    Current pop-up locations
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
