import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.svg";

const NavBar = () => {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Main navigation container */}
      <nav className="relative flex w-full flex-nowrap items-center justify-between py-4 bg-white lg:flex-wrap lg:justify-start">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="cursour-pointer block border-0 bg-transparent px-2 text-black hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black cursour-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible navbar container */}
          <div
            className={`lg:flex lg:basis-auto w-full flex-grow ${
              isOpen ? "block" : "hidden"
            } mt-2 lg:mt-0`}
          >
            {/* Left links */}
            <ul className="list-style-none lg:items-center items-start flex flex-col lg:flex-row lg:gap-8">
              <img src={logo} alt="Logo" className="h-15 w-25 lg:block hidden" />
              
              <li className="my-2 lg:my-0 ps-0">
                <Link
                  to="/"
                  className="p-0 text-black transition duration-200 hover:font-semibold"
                >
                  Home
                </Link>
              </li>

              <li className="my-2 ps-0 lg:my-0">
                <Link
                  className="p-0 text-black transition duration-200 hover:font-semibold"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="my-2 ps-0 lg:my-0">
                <Link
                  className="p-0 text-black transition duration-200 hover:font-semibold"
                  to="/events"
                >
                  Event Schedule
                </Link>
              </li>
              <li className="my-2 ps-0 lg:my-0">
                <Link
                  className="p-0 text-black transition duration-200 hover:font-semibold"
                  to="/products"
                >
                  Product Library
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
