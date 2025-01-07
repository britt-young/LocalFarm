import React, { useState } from "react";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="mb-24">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9730.65798844992!2d-84.54385570372669!3d30.427394402227847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1732121294203!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.4)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Card */}
            <div className="w-full mb-12 md:mb-0">
              <h2 className="font-semibold mb-10 flex justify-center text-xl">
                Visit us!
              </h2>
              <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="p-6 mb-2">
                  <h5 className="mb-1 text-xl font-medium leading-tight ">
                    Local Grocery
                  </h5>
                  <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                    1234 Main St, Tallahassee, FL 32301
                  </h6>
                  <p className="mb-4 text-base leading-normal">
                    Selected stock of our favorite products, including fresh
                    produce and dairy
                  </p>
                </div>
              </div>
              {/* Contact Card */}
              <div className="w-full mb-12 md:mb-0">
                <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <div className="p-6 mb-2">
                    <h5 className="mb-1 text-xl font-medium leading-tight ">
                      Market Booth
                    </h5>
                    <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                      Booth #1111, Town Sqaure
                    </h6>
                    <p className="mb-4 text-base leading-normal">
                      Limited selection of our most popular products
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact Card */}
              <div className="w-full mb-12 md:mb-0">
                <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <div className="p-6">
                    <h5 className="mb-1 text-xl font-medium leading-tight ">
                      Pop-Up Stand
                    </h5>
                    <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                      Location Varies, be sure to check our current location by clicking below
                    </h6>
                    <a
                      type="button"
                      href="#"
                      className="uppercase pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"
                    >
                      Current pop-up locations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Subscribe Contact Form */}
            <div className="w-full">
              <h2 className="font-semibold mb-10 flex justify-center text-xl">
                Subscribe to our Events Newsletter
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    id="exampleCheck96"
                  />
                  <label
                    className="inline-block pl-[0.15rem] text-neutral-500"
                    htmlFor="exampleCheck96"
                  >
                    I agree to the processing of my personal data
                  </label>
                </div>
                <div className="mt-10 text-center lg:text-left flex justify-center">
                  <button
                    type="submit"
                    className="inline-block rounded border-2 bg-lime-900 border-white px-6 pb-[6px] pt-2 text-xs font-normal uppercase tracking-widest leading-normal text-white transition duration-500 ease-in-out hover:border-black hover:text-black focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-white dark:focus:bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
