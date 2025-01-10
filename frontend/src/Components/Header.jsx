import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos/sample-logo.svg";

// Initialization for ES Users
import { Collapse, Ripple, initTWE } from "tw-elements";
initTWE({ Collapse, Ripple });

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[600px] overflow-hidden bg-[url(https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/0 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-white md:px-12">
                {/* <img src={logo} alt="Logo" className="w-96 mx-auto" /> */}
                {/* <h1 className="mb-6 text-5xl font-bold"></h1> */}
                <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl uppercase">growing for you since 1952</h1>
                <button
                  type="button"
                  className="inline-block rounded border-2 bg-lime-900 border-white px-6 pb-[6px] pt-2 text-xs font-normal uppercase tracking-widest leading-normal text-white transition duration-500 ease-in-out hover:border-black hover:text-black focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-white dark:focus:bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                  onClick={handleClick}
                >
                  Current pop-up locations
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
