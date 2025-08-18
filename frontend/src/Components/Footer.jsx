import logo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-center text-surface/75 lg:text-left">
      {/* <!-- Footer content container --> */}
      <div className="mx-6 py-15 text-left">
        <div className="grid-1 grid md:grid-cols-2 gap-10 lg:gap-60 lg:max-w-7xl lg:mx-auto p-2">
          {/* <!-- Company Section --> */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="h-40 mb-4 mx-auto md:mx-0" />
            <p className="mb-4">
              We are a community-driven agricultural resource connecting local
              farmers and local families. Our mission is to promote sustainable
              agriculture, provide a fun outdoor experience, and share local
              food with everyone. We are proud partners with{" "}
              <span className="font-bold">
                Market on Main Tally, Parrish Farm to Table Restaurant
              </span>
              , and{" "}
              <span className="font-bold">Tallahassee Farmers Market</span>.
              Come visit us at our next pop-up event!
            </p>
            <Link to="/events">
              <button>See current pop-up locations</button>
            </Link>
          </div>

          {/* <!-- Contact/Link right section --> */}
          <div className="">
            <div>
              <h4 className="border-l-6 border-orange-400 pl-2 mb-2 ">
                Stay in Touch
              </h4>
              {/* <!-- Social network icons container --> */}
              <div className="flex items-center my-4 ">
                {/* Facebook */}
                <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1877f2"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>
                {/* X/ Twitter */}
                <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                {/* Google */}
                <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ea4335"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#c13584"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0077b5"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
              </div>
              {/* Contact section */}
              <div className="flex flex-col items-start justify-center lg:p-2 p-0 text-sm">
                {/* Local Grocery */}
                <div className="block min-w-full text-left mb-4">
                  <div>
                    <h5 className="font-bold">Local Grocery</h5>
                    {/* <p className="mb-2 ">
                      All products sourced from Local Farm land and packaged
                      on-site
                    </p> */}
                    <ul >
                      <li>1234 Main St, Tallahassee, FL 32301</li>
                      <li className="indent-2">+1 (800) 123-4567</li>
                    </ul>
                  </div>
                </div>

                {/* Market Booth */}
                <div className="block min-w-full text-left">
                  <div>
                    <h5 className="font-bold">Market Booth</h5>
                    <h6>Booth #1111, Town Sqaure</h6>
                    {/* <p className="mb-4 ">
                      Limited selection of our most popular products
                    </p> */}
                  </div>
                </div>

                {/* Pop-Up Stand */}
                <div className="block min-w-full text-left">
                  <div>
                    <h5 className="font-bold">Pop-Up Stand</h5>
                    <Link to="/events" className="mb-4">
                      <p className="text-orange-400 hover:text-orange-400/50">
                        (see our current pop-up locations)
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Links section */}
            <div className="mt-8">
              <h4 className="border-l-6 border-orange-400 pl-2 mb-2 ">
                Quick Links
              </h4>
              <div className="text-left text-sm indent-4">
                <ul>
                  <li className="hover:text-orange-400">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-orange-400">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="hover:text-orange-400">
                    <Link to="/events">Event Schedule</Link>
                  </li>
                  <li className="hover:text-orange-400">
                    <Link to="/products">Product Library</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-200 text-black p-1 w-full ps-6 pe-6 text-sm">
        <span className="gap-1 flex ">
          © 2024
          <a href="https://gulfcoastwdd.com/">
            Gulf Coast Web Design & Development
          </a>
        </span>
        <div className="gap-8 flex flex-wrap justify-center lg:justify-end">
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
