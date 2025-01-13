import React, { useState } from "react";

const NavBar = () => {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Main navigation container */}
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
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
            className={`lg:flex lg:basis-auto w-full flex-grow ${isOpen ? "block" : "hidden"} mt-2 lg:mt-0`}
          >
            {/* Left links */}
            <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
              <li className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black focus:text-black dark:text-white/60 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="/"
                >
                  Homepage
                </a>
              </li>
              <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black focus:text-black dark:text-white/60 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="/about"
                >
                  About Local
                </a>
              </li>
              <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black focus:text-black dark:text-white/60 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="/events"
                >
                  Event Schedule
                </a>
              </li>
              <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black focus:text-black dark:text-white/60 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="/products"
                >
                  Our Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
